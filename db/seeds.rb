# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = [
  {
    email: 'kgaladoe@gmail.com',
    password: 'applevalley123',
    password_confirmation: 'applevalley123'
  }
]

user.each do |attribute|
  User.create attribute
  puts "creating user #{attribute}"
end


apartment = [
  {
    street: '123 Street',
    city: 'San Diego',
    state: 'California',
    manager: 'Abby',
    email: 'abby123@testing.com',
    price: '$2,500',
    bedrooms: 3,
    bathrooms: 2,
    pets: 'only cats and dogs',
    user_id: 1
  },
  {
    street: 'John Street',
    city: 'Plymouth',
    state: 'Minnesota',
    manager: 'Luke',
    email: 'luke123@testing.com',
    price: '$1,450',
    bedrooms: 2,
    bathrooms: 3,
    pets: 'no pets',
    user_id: 2
  }
]

apartment.each do |attribute|
  Apartment.create attribute
  puts "creating apartment #{attribute}"
