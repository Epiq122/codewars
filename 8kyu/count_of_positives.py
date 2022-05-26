# Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
def count_positives_sum_negatives(arr):
    if arr == []:
        return []
    else:
        positives = 0
        negatives = 0
        for i in arr:
            if i > 0:
                positives += 1
            else:
                negatives += i
        return [positives, negatives]
