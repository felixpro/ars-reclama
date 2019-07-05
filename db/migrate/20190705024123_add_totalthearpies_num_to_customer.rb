class AddTotalthearpiesNumToCustomer < ActiveRecord::Migration[5.2]
  def change
    add_column :customers, :total_therapies, :integer
  end
end
