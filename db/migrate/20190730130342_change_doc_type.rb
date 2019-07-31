class ChangeDocType < ActiveRecord::Migration[5.2]
  def change
    change_column :customers, :doc_type, :integer, using: 'doc_type::integer'
  end
end
