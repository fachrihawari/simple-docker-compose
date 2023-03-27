# based image yang akan digunakan
FROM node:18.15.0

# path di container dimana berisi codingan kita (path bebas sesuai kesepakatan bersama)
WORKDIR /products

# copy deps yang ada di apps ke WORKDIR
COPY package.json package-lock.json /products

# Install npm & Mengapus cache
RUN npm install

# copy semua file & folder ke WORKDIR
COPY ./ ./

# execute apps: production
CMD ["npm", "run", "start"]