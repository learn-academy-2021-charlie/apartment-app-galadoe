require 'rails_helper'

RSpec.describe "Apartments", type: :request do


    it 'doesnt create an apartment with a street' do
      apt_params = {
        apartment: {
          city: 'San Diego',
          state: 'California',
          manager: 'Johnson',
          email: 'jonhson@testing.com',
          price: '$2,500',
          bedrooms: 3,
          bathrooms: 2,
          pets: 'no pets allowed',
        }
      }

      # Send the request to the  server
      post '/apartments', params: apt_params
      # expect an error if the apt_params does not have a street
      expect(response.status).to eq 422
      # Convert the JSON response into a Ruby Hash
      json = JSON.parse(response.body)
      expect(json['street']).to include "can't be blank"

  end

end
