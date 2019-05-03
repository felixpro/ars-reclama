json.extract! customer, :id, :name, :phone, :cell, :email, :affiliate_number, :img, :age, :doc, :sector, :city, :gender, :doc_type, :autorization_number, :therapies, :adress, :created_at, :updated_at
json.url customer_url(customer, format: :json)
