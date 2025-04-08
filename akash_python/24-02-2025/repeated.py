repeat_tuple = (1, 2, 3, 4, 1, 2, 2, 3)
repeated_items = {item for item in repeat_tuple if repeat_tuple.count(item)>1}
print("repeated item",repeated_items)