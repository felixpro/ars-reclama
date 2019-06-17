class CreateReclamations < ActiveRecord::Migration[5.2]
  def change
    create_table :reclamations do |t|
      t.references :customer, foreign_key: true
      t.integer :authNum
      t.integer :therapiesNum
      t.integer :doctor
      t.integer :creationDate

      t.timestamps
    end
  end
end
