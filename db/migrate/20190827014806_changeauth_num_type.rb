class ChangeauthNumType < ActiveRecord::Migration[5.2]
  def change
    change_column :reclamations, :authNum, :string
  end
end
