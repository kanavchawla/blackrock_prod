import pandas as pd
import numpy as np
from sklearn.impute import SimpleImputer
import joblib
import sys
import json
import os
import warnings

# Suppress warnings
warnings.filterwarnings("ignore", category=UserWarning)

# Load dataset
csv_file = "data.csv"
df = pd.read_csv(csv_file, parse_dates=['Date'])
df.ffill(inplace=True)

def create_features(df, company_name):
    df_company = df[['Date', company_name]].dropna()
    df_company['Lag1'] = df_company[company_name].shift(1)
    df_company['Lag2'] = df_company[company_name].shift(2)
    df_company['Lag3'] = df_company[company_name].shift(3)
    df_company.dropna(inplace=True)
    return df_company

def predict_future_prices(model, imputer, initial_prices, days_ahead=252):
    future_prices = []
    current_prices = initial_prices
    
    for _ in range(days_ahead):
        next_price = predict_next_day_price(current_prices, model, imputer)
        future_prices.append(next_price)
        current_prices = [next_price] + current_prices[:-1]
    
    return future_prices

def predict_next_day_price(current_prices, model, imputer):
    processed_input = imputer.transform([current_prices])
    return model.predict(processed_input)[0]

# Read arguments from command line or assign default values
if len(sys.argv) > 1:
    company_name, investment_amount, years_ahead = sys.argv[1], float(sys.argv[2]), int(sys.argv[3])
else:
    # Default values for testing
    company_name = "RELIANCE"
    investment_amount = 5000.0
    years_ahead = 1

# Recreate the required features for prediction
df_company = create_features(df, company_name)

# Define the full path to the model and imputer
current_dir = os.path.dirname(os.path.realpath(__file__))
model_path = os.path.join(current_dir, f'{company_name}_rf_model.pkl')
imputer_path = os.path.join(current_dir, f'{company_name}_imputer.pkl')

# Ensure files exist
if not os.path.exists(model_path):
    raise FileNotFoundError(f"Model file not found: {model_path}")

if not os.path.exists(imputer_path):
    raise FileNotFoundError(f"Imputer file not found: {imputer_path}")

# Load the saved model and imputer
model = joblib.load(model_path)
imputer = joblib.load(imputer_path)

# Get the last known prices for the company
latest_prices = [df_company[company_name].iloc[-1],
                 df_company['Lag1'].iloc[-1],
                 df_company['Lag2'].iloc[-1]]

# Predict future prices for the given time period
future_prices = predict_future_prices(model, imputer, latest_prices, days_ahead=252*years_ahead)
final_price = future_prices[-1]

# Calculate future investment value
initial_price = latest_prices[0]
investment_return = (final_price / initial_price) * investment_amount

# Calculate risk factor (volatility)
df_company['Returns'] = df_company[company_name].pct_change()
volatility = df_company['Returns'].std() * np.sqrt(252)  # Annualized volatility
risk_factor = volatility * 100

# Output as JSON
print(json.dumps({
    "company_name": company_name,
    "risk_factor": risk_factor,
    "investment_return": investment_return
}))
