class AddTherapist < ActiveRecord::Migration[5.2]
  def change
    add_column :reclamations, :therapist, :integer
  end
end
