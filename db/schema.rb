# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_06_30_193908) do

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.integer "record_id", null: false
    t.integer "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "customers", force: :cascade do |t|
    t.string "name"
    t.integer "phone"
    t.integer "cell"
    t.string "email"
    t.integer "affiliate_number"
    t.string "img"
    t.integer "age"
    t.string "doc"
    t.string "sector"
    t.string "city"
    t.integer "gender"
    t.integer "doc_type"
    t.integer "autorization_number"
    t.integer "therapies"
    t.string "adress"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "insurance"
    t.integer "contractNum"
    t.integer "draft_id"
    t.datetime "published_at"
    t.datetime "trashed_at"
  end

  create_table "drafts", force: :cascade do |t|
    t.string "item_type", null: false
    t.integer "item_id", null: false
    t.string "event", null: false
    t.string "whodunnit"
    t.text "object"
    t.text "previous_draft"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["created_at"], name: "index_drafts_on_created_at"
    t.index ["event"], name: "index_drafts_on_event"
    t.index ["item_id"], name: "index_drafts_on_item_id"
    t.index ["item_type"], name: "index_drafts_on_item_type"
    t.index ["updated_at"], name: "index_drafts_on_updated_at"
    t.index ["whodunnit"], name: "index_drafts_on_whodunnit"
  end

  create_table "reclamations", force: :cascade do |t|
    t.integer "customer_id"
    t.integer "authNum"
    t.integer "therapiesNum"
    t.integer "doctor"
    t.string "creationDate"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "diagnostic"
    t.string "ensureReclam"
    t.index ["customer_id"], name: "index_reclamations_on_customer_id"
  end

  create_table "services", force: :cascade do |t|
    t.integer "customer_id"
    t.string "process"
    t.integer "code"
    t.integer "reclaimed"
    t.integer "authorized"
    t.integer "difference"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["customer_id"], name: "index_services_on_customer_id"
  end

end
