class CreateAppointments < ActiveRecord::Migration[5.2]
  def change
    create_table :appointments do |t|
      t.references :customer, foreign_key: true
      t.string :date_therapie

      t.timestamps
    end
  end
end
