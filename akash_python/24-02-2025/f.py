identical_tuple=(5,5,5,5)

result=all(x==identical_tuple[0] for x in identical_tuple)

print("the identical is ",result)