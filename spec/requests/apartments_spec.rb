require 'rails_helper'

RSpec.describe "Apartments", type: :request do
  describe "GET /index" do

    it 'gets list of apartment' do
      User.create(
        email: kgaladoe@gmail.com,
        password: testing123,
        password_confirmation: testing123
      )

      user = User.where(email: kgaladoe@gmail.com).first
      user.apartments.create(
        street: '123 Street',
        city: 'San Diego',
        state: 'California',
        manager: 'Johnson',
        email: 'jonhson@testing.com',
        price: '$2,500',
        bedrooms: 3,
        bathrooms: 2,
        pets: 'no pets allowed',
        user_id: 1
      )

      get apartment_path

      expect(response).to have_http_status(200)
      apartment = JSON.parse(response.body)
      expect(apartment.length).to eq 1
    end
  end
end
