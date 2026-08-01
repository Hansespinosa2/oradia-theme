# LOOK AT: true / false / nil should render BOLD; names pop, strings sit back
class Item < ApplicationRecord
  DEFAULTS = { active: true, archived: false, note: nil }.freeze

  validates :name, presence: true

  def summary
    state = active? ? "active" : "inactive"
    "#{name} (#{state}) — priced #{price.nil? ? 'TBD' : format('$%.2f', price)}"
  end

  def self.tally(items)
    items.select(&:active?).sum(&:price) if items.any?
  end
end

item = Item.new(name: "widget", active: true, archived: false, note: nil)
puts item.summary
