# MEVN-boilerplate

## Setup Development Machine
1. Clone the repo `git clone https://github.com/SnellOKC/nsor-testdata.git`

2. `cd MEVN-boilerplate-testdata`

3. Open client
```
cd client
npm run dev
```

4. Open server
```
cd server
npm start
```

5. Open `http://localhost:8080` in browser

6. Zeplin screenshot located in client > src > assets

7. CSV test data located in server. I ran the following `mongoimport` commands to create and load the CSV files locally. 

`mongoimport --db MEVN-boilerplate --collection bpsdetail --type csv --headerline --file BPSDetail_TestLoad.csv`
`mongoimport --db MEVN-boilerplate --collection phdetail --type csv --headerline --file PHDetail_TestLoad.csv`

