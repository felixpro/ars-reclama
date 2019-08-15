class Customer < ApplicationRecord
  include PgSearch


  has_many :service, dependent: :delete_all
  has_many :reclamation, dependent: :delete_all
  has_many :appointment, dependent: :delete_all
  has_many :historial, dependent: :delete_all

  has_one_attached :image

  enum gender: [:Femenino, :Masculino]
  enum doc_type: [:Cedula, :Pasaporte]

  validates :doc, :uniqueness => true
  validates :affiliate_number, :uniqueness => true
  validates :name, :uniqueness => true

   pg_search_scope :search_by_title_and_body, :against => [:name, :doc],
     using: {
       :tsearch => {:prefix => true}
     }

end
