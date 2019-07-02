class AddDraftsToCustomer < ActiveRecord::Migration[5.2]
  def change
    add_column :customers, :draft_id, :integer
    add_column :customers, :published_at, :timestamp
    add_column :customers, :trashed_at, :timestamp
  end
end
