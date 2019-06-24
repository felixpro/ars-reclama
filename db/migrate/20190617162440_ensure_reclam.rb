class EnsureReclam < ActiveRecord::Migration[5.2]
  def change
    add_column :reclamations, :ensureReclam, :string
  end
end
