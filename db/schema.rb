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

ActiveRecord::Schema.define(version: 2019_06_15_194626) do

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
