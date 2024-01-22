FROM nodejs
WORKDIR /app
COPY . .
RUN npm install

