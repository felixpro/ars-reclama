class CreateHistorials < ActiveRecord::Migration[5.2]
  def change
    create_table :historials do |t|
      t.string :padecimiento
      t.string :status
      t.string :patologico
      t.string :familiares
      t.string :examen
      t.string :anexo
      t.string :unificada
      t.string :autorizar
      t.string :firma
      t.references :customer, foreign_key: true

      t.timestamps
    end
  end
end
