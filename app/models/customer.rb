class Customer < ApplicationRecord


  has_many :service, dependent: :delete_all
  has_many :reclamation, dependent: :delete_all
  has_many :appointment, dependent: :delete_all
  has_many :historial, dependent: :delete_all

  has_one_attached :image

  enum gender: [:Femenino, :Masculino]
  enum doc_type: [:Cedula, :Pasaporte]

  validates :doc, :uniqueness => true
  validates :affiliate_number, :uniqueness => true


    def self.search(search_term)
      if Rails.env.development?
        Customer.where('name LIKE ?', "%#{search_term}%")
      else
        Customer.where('name ilike ?', "%#{search_term}%")
      end
    end
  end
