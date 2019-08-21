class ChangeDoctorType < ActiveRecord::Migration[5.2]
  def change
    change_column :reclamations, :doctor, :string
  end
end
