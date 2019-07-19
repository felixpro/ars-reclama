class CreateCustomers < ActiveRecord::Migration[5.2]
  def change
    create_table :customers do |t|
      t.string :name
      t.integer :phone
      t.integer :cell
      t.string :email
      t.integer :affiliate_number
      t.string :img
      t.integer :age
      t.string :doc
      t.string :sector
      t.string :city
      t.integer :gender
      t.boolean :doc_type
      t.integer :autorization_number
      t.integer :therapies
      t.string :adress

      t.timestamps
    end
  end
end
