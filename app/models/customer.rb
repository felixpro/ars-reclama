class Customer < ApplicationRecord
  enum gender: [:female, :male]
  enum doc_type: [:cedula, :pasaporte]

end
