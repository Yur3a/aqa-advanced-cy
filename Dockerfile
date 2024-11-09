FROM cypress/included:12.8.1
WORKDIR /e2e
COPY . .
CMD ["cypress", "run", "--browser", "firefox"]