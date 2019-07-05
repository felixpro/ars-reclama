class AddTherapieNumToCustomer < ActiveRecord::Migration[5.2]
  def change
    add_column :customers, :therapies_num, :integer
  end
end
