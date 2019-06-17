class ChangeDate < ActiveRecord::Migration[5.2]
  def change
    change_column :reclamations, :creationDate, :string
  end
end
