class AddContractNum < ActiveRecord::Migration[5.2]
  def change
    add_column :customers, :contractNum, :integer
  end
end
