#!/usr/bin/python3
"""Flask app to generate complete html page containing location/amenity
dropdown menus and rental listings"""
from flask import Flask, render_template
from api.v1.app import app as api_app  # Import the Flask app from the API module

app = Flask('web_dynamic')
app.url_map.strict_slashes = False


@app.route('/4-hbnb')
def display_hbnb():
    """Generate page with popdown menu of states/cities"""
    # Fetch places data using the new API endpoint
    places_data = fetch_places_data()
    states = []
    amenities = []
    places = []
    cache_id = generate_cache_id()

    return render_template('4-hbnb.html',
                           states=states,
                           amenities=amenities,
                           places=places_data,
                           cache_id=cache_id)


def fetch_places_data():
    """
    Fetch places data from the backend API.
    You should implement this function to fetch data from the API endpoint
    '/api/v1/places_search/' using appropriate requests library or method.
    """
    # Implement fetching places data from the backend API
    # Return the fetched places data or handle errors accordingly
    pass


def generate_cache_id():
    """
    Generate a unique cache_id.
    You should implement this function to generate a unique cache_id.
    """
    # Implement generating a unique cache_id, for example using uuid
    # Return the generated cache_id
    pass


@app.teardown_appcontext
def teardown_db(*args, **kwargs):
    """Close database or file storage"""
    pass  # No need to close storage here since it's handled by the API app


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
