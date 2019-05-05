class ChangeGenderData < ActiveRecord::Migration[5.2]
  def change
    change_column :customers, :gender, :integer
    change_column :customers, :doc_type, :integer

  end
end
