class AddInsurance < ActiveRecord::Migration[5.2]
  def change
    add_column :customers, :insurance, :string
  end
end
