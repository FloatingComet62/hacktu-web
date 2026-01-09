#!/usr/bin/env bash
set -e

urls=(
  "https://neobrutalism.dev/r/accordion.json"
  "https://neobrutalism.dev/r/alert-dialog.json"
  "https://neobrutalism.dev/r/alert.json"
  "https://neobrutalism.dev/r/avatar.json"
  "https://neobrutalism.dev/r/badge.json"
  "https://neobrutalism.dev/r/breadcrumb.json"
  "https://neobrutalism.dev/r/button.json"
  # "https://neobrutalism.dev/r/calendar.json" # calender is giving an error
  "https://neobrutalism.dev/r/card.json"
  "https://neobrutalism.dev/r/carousel.json"
  "https://neobrutalism.dev/r/checkbox.json"
  "https://neobrutalism.dev/r/collapsible.json"
  "https://neobrutalism.dev/r/command.json"
  "https://neobrutalism.dev/r/context-menu.json"
  # "https://neobrutalism.dev/r/date-picker.json" # 404
  # "https://neobrutalism.dev/r/data-table.json" # 404
  "https://neobrutalism.dev/r/dialog.json"
  "https://neobrutalism.dev/r/drawer.json"
  "https://neobrutalism.dev/r/dropdown-menu.json"
  "https://neobrutalism.dev/r/form.json"
  "https://neobrutalism.dev/r/hover-card.json"
  "https://neobrutalism.dev/r/input.json"
  "https://neobrutalism.dev/r/label.json"
  "https://neobrutalism.dev/r/marquee.json"
  "https://neobrutalism.dev/r/menubar.json"
  "https://neobrutalism.dev/r/navigation-menu.json"
  "https://neobrutalism.dev/r/pagination.json"
  "https://neobrutalism.dev/r/popover.json"
  "https://neobrutalism.dev/r/progress.json"
  "https://neobrutalism.dev/r/radio-group.json"
  "https://neobrutalism.dev/r/scroll-area.json"
  "https://neobrutalism.dev/r/select.json"
  "https://neobrutalism.dev/r/sheet.json"
  "https://neobrutalism.dev/r/sidebar.json"
  "https://neobrutalism.dev/r/skeleton.json"
  "https://neobrutalism.dev/r/slider.json"
  "https://neobrutalism.dev/r/switch.json"
  "https://neobrutalism.dev/r/table.json"
  "https://neobrutalism.dev/r/tabs.json"
  "https://neobrutalism.dev/r/textarea.json"
  "https://neobrutalism.dev/r/tooltip.json"
)

echo "Installing all Neobrutalism components via shadcn CLI..."

for url in "${urls[@]}"; do
  echo ""
  echo "Installing $url"
  npx shadcn@latest add -o "$url"
done

echo ""
echo "Installed all listed components!"
