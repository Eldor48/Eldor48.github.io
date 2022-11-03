import os
import openai

openai.api_key = <'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'>

response = openai.Completion.create(
  model="text-davinci-002",
  prompt="You have had a profitable sixth week at your new company. You mastered how to work with data generation, manipulation, and conversion in Structured Query Language (SQL) queries.\n\nYour boss decided to see if you now have the skills to learn how to use grouping and aggregation to view calculated information. Your boss would like you to demonstrate how aggregation is a key factor in data analytics. Your boss is most curious to understand your view on the importance of these elements of aggregation:\n\n    Implicit versus explicit groups\n    The difference in results when counting only distinct values\n    The nuances and power of using expressions inside aggregation functions\n    The differences when counting sets of numbers with or without null values \n    The differences between single and multiple column grouping\n\nYou should return and report with a 3-5 paragraph report that clearly explains what you learned while experimenting with the main five aggregation commands in queries.",
  temperature=0.7,
  max_tokens=256,
  top_p=1,
  frequency_penalty=0,
  presence_penalty=0
)