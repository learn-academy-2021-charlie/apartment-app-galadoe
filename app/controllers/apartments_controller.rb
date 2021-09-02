class ApartmentsController < ApplicationController
  def index
    apartments = Apartment.all
    render json: apartments
  end

  def create
    apartment = Apartment.create(apt_params)
    render json: apartments
  end





private
  def apt_params
    params.require(apartment).permit(:street, :city, :state, :manager, :email, :price, :bedrooms, :bathrooms, :pets, :user_id)
  end
end
