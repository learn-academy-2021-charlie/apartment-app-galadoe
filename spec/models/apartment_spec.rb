require 'rails_helper'

RSpec.describe Apartment, type: :model do
  it "should have street" do
    apartment = Apartment.create(city: 'San Diego', state: 'California', manager: 'Johnson', email: 'jonhson@testing.com', price: '$2,500', bedrooms: 3, bathrooms: 2, pets: 'no pets allowed',)
    expect(apartment.errors[:street]).to_not be_empty
  end

  it "should have city" do
    apartment = Apartment.create(street:'123 Street',state: 'California', manager: 'Johnson', email: 'jonhson@testing.com', price: '$2,500', bedrooms: 3, bathrooms: 2, pets: 'no pets allowed',)
    expect(apartment.errors[:city]).to_not be_empty
  end

  it "should have state" do
    apartment = Apartment.create(street:'123 Street', city: 'San Diego', manager: 'Johnson', email: 'jonhson@testing.com', price: '$2,500', bedrooms: 3, bathrooms: 2, pets: 'no pets allowed',)
    expect(apartment.errors[:state]).to_not be_empty
  end

  it "should have manager" do
    apartment = Apartment.create(street:'123 Street', city: 'San Diego', state: 'California', email: 'jonhson@testing.com', price: '$2,500', bedrooms: 3, bathrooms: 2, pets: 'no pets allowed',)
    expect(apartment.errors[:manager]).to_not be_empty
  end

  it "should have email" do
    apartment = Apartment.create(street:'123 Street', city: 'San Diego', state: 'California', manager: 'Johnson', price: '$2,500', bedrooms: 3, bathrooms: 2, pets: 'no pets allowed',)
    expect(apartment.errors[:email]).to_not be_empty
  end

  it "should have price" do
    apartment = Apartment.create(street:'123 Street', city: 'San Diego', state: 'California', manager: 'Johnson', email: 'jonhson@testing.com', bedrooms: 3, bathrooms: 2, pets: 'no pets allowed',)
    expect(apartment.errors[:price]).to_not be_empty
  end

  it "should have bedroom" do
    apartment = Apartment.create(street:'123 Street', city: 'San Diego', state: 'California', manager: 'Johnson', email: 'jonhson@testing.com', price: '$2,500', bathrooms: 2, pets: 'no pets allowed',)
    expect(apartment.errors[:bedrooms]).to_not be_empty
  end

  it "should have bathroom" do
    apartment = Apartment.create(street:'123 Street', city: 'San Diego', state: 'California', manager: 'Johnson', email: 'jonhson@testing.com', price: '$2,500', bedrooms: 3, pets: 'no pets allowed',)
    expect(apartment.errors[:bathrooms]).to_not be_empty
  end

  it "should have pets" do
    apartment = Apartment.create(street:'123 Street', city: 'San Diego', state: 'California', manager: 'Johnson', email: 'jonhson@testing.com', price: '$2,500', bedrooms: 3, bathrooms: 2)
    expect(apartment.errors[:pets]).to_not be_empty 
  end


end
