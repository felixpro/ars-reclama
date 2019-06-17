class Customer < ApplicationRecord

  has_many :service, dependent: :delete_all
  has_many :reclamation, dependent: :delete_all



  enum gender: [:female, :male]
  enum doc_type: [:cedula, :pasaporte]

end
