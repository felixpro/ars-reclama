class Customer < ApplicationRecord

  has_many :service, dependent: :delete_all
  has_many :reclamation, dependent: :delete_all



  enum gender: [:Fem, :Mas]
  enum doc_type: [:Cedula, :Pasaporte]

end
