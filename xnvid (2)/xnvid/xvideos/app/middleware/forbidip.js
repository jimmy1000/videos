module.exports = (option, app) => {
    return async function forbideIp(ctx, next) {
        // firbideip 数据可以来自数据库，也可以来自传参
        var firbideip = [
            '66.249',
            '35.202.2',
            '35.239.58',
            '58.49.170',
            '1.0',
            '1.1',
            '1.2',
            '1.3',
            '1.4',
            '1.8',
            '1.10',
            '1.12',
            '1.24',
            '1.45',
            '1.48',
            '1.56',
            '1.68',
            '1.80',
            '1.116',
            '1.180',
            '1.184',
            '1.188',
            '1.192',
            '1.202',
            '1.204',
            '14.0',
            '14.1',
            '14.16',
            '14.102',
            '14.103',
            '14.104',
            '14.112',
            '14.130',
            '14.134',
            '14.144',
            '14.192',
            '14.196',
            '14.204',
            '14.208',
            '27.0',
            '27.8',
            '27.16',
            '27.34',
            '27.36',
            '27.40',
            '27.50',
            '27.54',
            '27.98',
            '27.99',
            '27.103',
            '27.106',
            '27.109',
            '27.112',
            '27.113',
            '27.115',
            '27.116',
            '27.121',
            '27.128',
            '27.131',
            '27.144',
            '27.148',
            '27.152',
            '27.184',
            '27.192',
            '27.224',
            '36.0',
            '36.1',
            '36.4',
            '36.16',
            '36.32',
            '36.36',
            '36.37',
            '36.40',
            '36.48',
            '36.51',
            '36.56',
            '36.96',
            '36.128',
            '36.192',
            '36.248',
            '36.254',
            '36.255',
            '39.0',
            '39.64',
            '39.96',
            '39.104',
            '39.108',
            '39.128',
            '40.72',
            '40.125',
            '40.126',
            '42.0',
            '42.1',
            '42.4',
            '42.48',
            '42.56',
            '42.62',
            '42.63',
            '42.80',
            '42.83',
            '42.84',
            '42.88',
            '42.96',
            '42.97',
            '42.99',
            '42.100',
            '42.120',
            '42.122',
            '42.123',
            '42.128',
            '42.156',
            '42.157',
            '42.158',
            '42.160',
            '42.176',
            '42.184',
            '42.186',
            '42.187',
            '42.192',
            '42.201',
            '42.202',
            '42.204',
            '42.208',
            '42.224',
            '42.240',
            '42.242',
            '42.244',
            '42.248',
            '43.224',
            '43.225',
            '43.226',
            '43.227',
            '43.228',
            '43.229',
            '43.230',
            '43.231',
            '43.236',
            '43.238',
            '43.239',
            '43.240',
            '43.241',
            '43.242',
            '43.243',
            '43.246',
            '43.247',
            '43.248',
            '43.249',
            '43.250',
            '43.251',
            '43.252',
            '43.254',
            '43.255',
            '45.40',
            '45.65',
            '45.112',
            '45.113',
            '45.114',
            '45.115',
            '45.116',
            '45.117',
            '45.119',
            '45.120',
            '45.121',
            '45.122',
            '45.123',
            '45.124',
            '45.125',
            '45.126',
            '45.127',
            '45.248',
            '45.249',
            '45.250',
            '45.251',
            '45.252',
            '45.253',
            '45.254',
            '45.255',
            '47.92',
            '47.96',
            '49.4',
            '49.51',
            '49.52',
            '49.64',
            '49.112',
            '49.120',
            '49.128',
            '49.140',
            '49.152',
            '49.208',
            '49.220',
            '49.232',
            '49.239',
            '49.246',
            '52.80',
            '52.130',
            '54.222',
            '58.14',
            '58.16',
            '58.24',
            '58.30',
            '58.32',
            '58.65',
            '58.66',
            '58.68',
            '58.82',
            '58.83',
            '58.87',
            '58.99',
            '58.100',
            '58.116',
            '58.128',
            '58.144',
            '58.154',
            '58.192',
            '58.240',
            '59.32',
            '59.64',
            '59.80',
            '59.107',
            '59.108',
            '59.151',
            '59.152',
            '59.153',
            '59.155',
            '59.172',
            '59.191',
            '59.192',
            '60.0',
            '60.55',
            '60.63',
            '60.160',
            '60.194',
            '60.200',
            '60.208',
            '60.232',
            '60.235',
            '60.245',
            '60.247',
            '60.252',
            '60.253',
            '60.255',
            '61.4',
            '61.8',
            '61.14',
            '61.28',
            '61.29',
            '61.45',
            '61.47',
            '61.48',
            '61.87',
            '61.128',
            '61.232',
            '61.236',
            '61.240',
            '62.234',
            '68.79',
            '69.230',
            '69.231',
            '69.234',
            '69.235',
            '71.131',
            '71.132',
            '71.136',
            '71.137',
            '81.68',
            '82.156',
            '91.234',
            '94.191',
            '101.0',
            '101.1',
            '101.2',
            '101.4',
            '101.16',
            '101.33',
            '101.34',
            '101.36',
            '101.40',
            '101.48',
            '101.50',
            '101.52',
            '101.53',
            '101.54',
            '101.55',
            '101.64',
            '101.72',
            '101.76',
            '101.78',
            '101.80',
            '101.96',
            '101.99',
            '101.101',
            '101.102',
            '101.104',
            '101.110',
            '101.120',
            '101.124',
            '101.126',
            '101.128',
            '101.129',
            '101.130',
            '101.132',
            '101.144',
            '101.192',
            '101.200',
            '101.203',
            '101.204',
            '101.224',
            '101.232',
            '101.234',
            '101.236',
            '101.240',
            '101.248',
            '101.251',
            '101.252',
            '101.254',
            '103.1',
            '103.2',
            '103.3',
            '103.4',
            '103.5',
            '103.6',
            '103.7',
            '103.8',
            '103.9',
            '103.10',
            '103.11',
            '103.12',
            '103.13',
            '103.14',
            '103.15',
            '103.16',
            '103.17',
            '103.18',
            '103.19',
            '103.20',
            '103.21',
            '103.22',
            '103.23',
            '103.24',
            '103.25',
            '103.26',
            '103.27',
            '103.28',
            '103.29',
            '103.30',
            '103.31',
            '103.32',
            '103.34',
            '103.35',
            '103.36',
            '103.37',
            '103.38',
            '103.39',
            '103.40',
            '103.41',
            '103.42',
            '103.43',
            '103.44',
            '103.45',
            '103.46',
            '103.47',
            '103.48',
            '103.49',
            '103.50',
            '103.52',
            '103.53',
            '103.54',
            '103.55',
            '103.56',
            '103.57',
            '103.58',
            '103.59',
            '103.60',
            '103.61',
            '103.62',
            '103.63',
            '103.64',
            '103.65',
            '103.66',
            '103.67',
            '103.68',
            '103.69',
            '103.70',
            '103.71',
            '103.72',
            '103.73',
            '103.74',
            '103.75',
            '103.76',
            '103.77',
            '103.78',
            '103.79',
            '103.80',
            '103.81',
            '103.82',
            '103.83',
            '103.84',
            '103.85',
            '103.86',
            '103.87',
            '103.88',
            '103.89',
            '103.90',
            '103.91',
            '103.92',
            '103.93',
            '103.94',
            '103.95',
            '103.96',
            '103.97',
            '103.98',
            '103.99',
            '103.100',
            '103.101',
            '103.102',
            '103.103',
            '103.104',
            '103.105',
            '103.106',
            '103.107',
            '103.108',
            '103.109',
            '103.110',
            '103.111',
            '103.112',
            '103.113',
            '103.114',
            '103.115',
            '103.116',
            '103.117',
            '103.118',
            '103.119',
            '103.120',
            '103.121',
            '103.122',
            '103.123',
            '103.124',
            '103.125',
            '103.126',
            '103.129',
            '103.130',
            '103.131',
            '103.132',
            '103.133',
            '103.134',
            '103.135',
            '103.136',
            '103.137',
            '103.138',
            '103.139',
            '103.140',
            '103.141',
            '103.142',
            '103.143',
            '103.144',
            '103.145',
            '103.192',
            '103.193',
            '103.194',
            '103.195',
            '103.196',
            '103.197',
            '103.198',
            '103.199',
            '103.200',
            '103.201',
            '103.202',
            '103.203',
            '103.204',
            '103.205',
            '103.206',
            '103.207',
            '103.208',
            '103.209',
            '103.210',
            '103.211',
            '103.212',
            '103.213',
            '103.214',
            '103.215',
            '103.216',
            '103.217',
            '103.218',
            '103.219',
            '103.220',
            '103.221',
            '103.222',
            '103.223',
            '103.224',
            '103.225',
            '103.226',
            '103.227',
            '103.228',
            '103.229',
            '103.230',
            '103.231',
            '103.232',
            '103.233',
            '103.234',
            '103.235',
            '103.236',
            '103.237',
            '103.238',
            '103.239',
            '103.240',
            '103.241',
            '103.242',
            '103.243',
            '103.244',
            '103.245',
            '103.246',
            '103.247',
            '103.248',
            '103.249',
            '103.250',
            '103.251',
            '103.252',
            '103.253',
            '103.254',
            '103.255',
            '106.0',
            '106.2',
            '106.4',
            '106.8',
            '106.11',
            '106.12',
            '106.16',
            '106.32',
            '106.48',
            '106.50',
            '106.52',
            '106.56',
            '106.74',
            '106.80',
            '106.108',
            '106.112',
            '106.224',
            '109.244',
            '110.6',
            '110.16',
            '110.34',
            '110.40',
            '110.44',
            '110.48',
            '110.51',
            '110.52',
            '110.56',
            '110.64',
            '110.72',
            '110.75',
            '110.76',
            '110.77',
            '110.80',
            '110.88',
            '110.92',
            '110.93',
            '110.94',
            '110.96',
            '110.152',
            '110.156',
            '110.165',
            '110.166',
            '110.172',
            '110.173',
            '110.176',
            '110.192',
            '110.228',
            '110.232',
            '110.236',
            '110.240',
            '111.0',
            '111.66',
            '111.67',
            '111.68',
            '111.72',
            '111.85',
            '111.91',
            '111.92',
            '111.112',
            '111.116',
            '111.118',
            '111.119',
            '111.120',
            '111.124',
            '111.126',
            '111.128',
            '111.160',
            '111.170',
            '111.172',
            '111.176',
            '111.186',
            '111.192',
            '111.208',
            '111.221',
            '111.222',
            '111.223',
            '111.224',
            '111.235',
            '112.0',
            '112.64',
            '112.73',
            '112.74',
            '112.80',
            '112.96',
            '112.109',
            '112.111',
            '112.112',
            '112.116',
            '112.122',
            '112.124',
            '112.128',
            '112.132',
            '112.137',
            '112.192',
            '112.224',
            '113.0',
            '113.8',
            '113.11',
            '113.12',
            '113.16',
            '113.18',
            '113.21',
            '113.24',
            '113.31',
            '113.44',
            '113.48',
            '113.52',
            '113.54',
            '113.56',
            '113.58',
            '113.59',
            '113.62',
            '113.64',
            '113.128',
            '113.130',
            '113.132',
            '113.136',
            '113.194',
            '113.197',
            '113.200',
            '113.202',
            '113.204',
            '113.208',
            '113.209',
            '113.212',
            '113.213',
            '113.214',
            '113.218',
            '113.220',
            '113.224',
            '113.240',
            '113.248',
            '114.28',
            '114.31',
            '114.54',
            '114.60',
            '114.64',
            '114.68',
            '114.79',
            '114.80',
            '114.96',
            '114.104',
            '114.110',
            '114.111',
            '114.112',
            '114.116',
            '114.118',
            '114.119',
            '114.132',
            '114.135',
            '114.138',
            '114.141',
            '114.196',
            '114.198',
            '114.208',
            '114.224',
            '115.24',
            '115.28',
            '115.31',
            '115.32',
            '115.42',
            '115.44',
            '115.48',
            '115.69',
            '115.84',
            '115.85',
            '115.100',
            '115.104',
            '115.120',
            '115.124',
            '115.148',
            '115.152',
            '115.166',
            '115.168',
            '115.180',
            '115.187',
            '115.190',
            '115.192',
            '115.224',
            '116.0',
            '116.1',
            '116.2',
            '116.4',
            '116.8',
            '116.13',
            '116.16',
            '116.50',
            '116.52',
            '116.56',
            '116.58',
            '116.60',
            '116.66',
            '116.68',
            '116.69',
            '116.70',
            '116.76',
            '116.85',
            '116.89',
            '116.90',
            '116.95',
            '116.112',
            '116.116',
            '116.128',
            '116.192',
            '116.193',
            '116.194',
            '116.196',
            '116.197',
            '116.198',
            '116.199',
            '116.204',
            '116.205',
            '116.206',
            '116.207',
            '116.208',
            '116.212',
            '116.213',
            '116.214',
            '116.215',
            '116.216',
            '116.224',
            '116.242',
            '116.244',
            '116.248',
            '116.251',
            '116.252',
            '116.254',
            '116.255',
            '117.8',
            '117.21',
            '117.22',
            '117.24',
            '117.32',
            '117.40',
            '117.44',
            '117.48',
            '117.53',
            '117.57',
            '117.58',
            '117.59',
            '117.60',
            '117.64',
            '117.72',
            '117.74',
            '117.75',
            '117.76',
            '117.80',
            '117.100',
            '117.103',
            '117.104',
            '117.106',
            '117.112',
            '117.120',
            '117.121',
            '117.122',
            '117.124',
            '117.128',
            '118.24',
            '118.26',
            '118.28',
            '118.64',
            '118.66',
            '118.67',
            '118.72',
            '118.80',
            '118.84',
            '118.88',
            '118.89',
            '118.91',
            '118.102',
            '118.103',
            '118.107',
            '118.112',
            '118.120',
            '118.124',
            '118.126',
            '118.127',
            '118.132',
            '118.144',
            '118.178',
            '118.180',
            '118.184',
            '118.186',
            '118.188',
            '118.190',
            '118.192',
            '118.193',
            '118.194',
            '118.196',
            '118.202',
            '118.204',
            '118.212',
            '118.215',
            '118.224',
            '118.228',
            '118.230',
            '118.239',
            '118.242',
            '118.244',
            '118.248',
            '119.0',
            '119.2',
            '119.3',
            '119.4',
            '119.10',
            '119.15',
            '119.16',
            '119.18',
            '119.19',
            '119.20',
            '119.27',
            '119.28',
            '119.30',
            '119.31',
            '119.32',
            '119.40',
            '119.41',
            '119.42',
            '119.44',
            '119.48',
            '119.57',
            '119.58',
            '119.59',
            '119.60',
            '119.62',
            '119.63',
            '119.75',
            '119.78',
            '119.80',
            '119.82',
            '119.84',
            '119.88',
            '119.96',
            '119.108',
            '119.112',
            '119.128',
            '119.144',
            '119.148',
            '119.151',
            '119.160',
            '119.161',
            '119.162',
            '119.164',
            '119.176',
            '119.232',
            '119.235',
            '119.248',
            '119.252',
            '119.253',
            '119.254',
            '120.0',
            '120.24',
            '120.30',
            '120.32',
            '120.48',
            '120.52',
            '120.64',
            '120.72',
            '120.76',
            '120.80',
            '120.88',
            '120.90',
            '120.92',
            '120.94',
            '120.128',
            '120.136',
            '120.137',
            '120.143',
            '120.192',
            '121.0',
            '121.4',
            '121.8',
            '121.16',
            '121.32',
            '121.40',
            '121.46',
            '121.47',
            '121.48',
            '121.50',
            '121.51',
            '121.52',
            '121.54',
            '121.55',
            '121.56',
            '121.58',
            '121.59',
            '121.60',
            '121.68',
            '121.76',
            '121.79',
            '121.89',
            '121.100',
            '121.101',
            '121.192',
            '121.200',
            '121.201',
            '121.204',
            '121.224',
            '121.248',
            '121.255',
            '122.0',
            '122.4',
            '122.8',
            '122.10',
            '122.11',
            '122.12',
            '122.14',
            '122.48',
            '122.49',
            '122.51',
            '122.64',
            '122.96',
            '122.102',
            '122.112',
            '122.119',
            '122.128',
            '122.136',
            '122.144',
            '122.152',
            '122.156',
            '122.188',
            '122.192',
            '122.198',
            '122.200',
            '122.201',
            '122.204',
            '122.224',
            '122.240',
            '122.248',
            '122.255',
            '123.0',
            '123.4',
            '123.8',
            '123.49',
            '123.50',
            '123.52',
            '123.56',
            '123.60',
            '123.62',
            '123.64',
            '123.96',
            '123.98',
            '123.99',
            '123.100',
            '123.101',
            '123.103',
            '123.108',
            '123.112',
            '123.128',
            '123.136',
            '123.137',
            '123.138',
            '123.144',
            '123.160',
            '123.176',
            '123.177',
            '123.178',
            '123.180',
            '123.184',
            '123.196',
            '123.199',
            '123.206',
            '123.232',
            '123.242',
            '123.244',
            '123.249',
            '123.253',
            '123.254',
            '124.6',
            '124.14',
            '124.16',
            '124.20',
            '124.28',
            '124.29',
            '124.31',
            '124.40',
            '124.42',
            '124.47',
            '124.64',
            '124.66',
            '124.67',
            '124.68',
            '124.72',
            '124.88',
            '124.108',
            '124.109',
            '124.112',
            '124.126',
            '124.128',
            '124.147',
            '124.150',
            '124.151',
            '124.152',
            '124.160',
            '124.172',
            '124.192',
            '124.196',
            '124.200',
            '124.220',
            '124.224',
            '124.240',
            '124.242',
            '124.243',
            '124.248',
            '124.249',
            '124.250',
            '124.254',
            '125.31',
            '125.32',
            '125.58',
            '125.61',
            '125.62',
            '125.64',
            '125.96',
            '125.98',
            '125.104',
            '125.112',
            '125.169',
            '125.171',
            '125.208',
            '125.210',
            '125.213',
            '125.214',
            '125.215',
            '125.216',
            '125.254',
            '128.108',
            '129.28',
            '129.204',
            '129.211',
            '132.232',
            '134.175',
            '137.59',
            '139.5',
            '139.9',
            '139.129',
            '139.148',
            '139.155',
            '139.159',
            '139.170',
            '139.176',
            '139.183',
            '139.186',
            '139.189',
            '139.196',
            '139.200',
            '139.208',
            '139.217',
            '139.219',
            '139.220',
            '139.224',
            '139.226',
            '140.75',
            '140.143',
            '140.179',
            '140.205',
            '140.206',
            '140.210',
            '140.224',
            '140.237',
            '140.240',
            '140.243',
            '140.246',
            '140.249',
            '140.250',
            '140.255',
            '144.0',
            '144.7',
            '144.12',
            '144.48',
            '144.52',
            '144.123',
            '144.255',
            '146.56',
            '146.196',
            '148.70',
            '150.0',
            '150.115',
            '150.121',
            '150.122',
            '150.129',
            '150.138',
            '150.158',
            '150.223',
            '150.242',
            '150.255',
            '152.104',
            '152.136',
            '153.0',
            '153.3',
            '153.34',
            '153.36',
            '153.99',
            '153.101',
            '153.118',
            '154.8',
            '157.0',
            '157.18',
            '157.61',
            '157.119',
            '157.122',
            '157.148',
            '157.156',
            '157.255',
            '159.75',
            '159.226',
            '160.19',
            '160.20',
            '160.202',
            '160.238',
            '161.189',
            '161.207',
            '162.14',
            '162.105',
            '163.0',
            '163.47',
            '163.53',
            '163.125',
            '163.142',
            '163.177',
            '163.179',
            '163.204',
            '164.52',
            '166.111',
            '167.139',
            '167.189',
            '167.220',
            '168.160',
            '170.179',
            '171.8',
            '171.34',
            '171.36',
            '171.40',
            '171.80',
            '171.104',
            '171.112',
            '171.208',
            '172.81',
            '175.0',
            '175.16',
            '175.24',
            '175.30',
            '175.42',
            '175.44',
            '175.46',
            '175.48',
            '175.64',
            '175.102',
            '175.106',
            '175.111',
            '175.146',
            '175.148',
            '175.152',
            '175.158',
            '175.160',
            '175.176',
            '175.178',
            '175.184',
            '175.185',
            '175.186',
            '175.188',
            '180.76',
            '180.84',
            '180.86',
            '180.88',
            '180.94',
            '180.95',
            '180.96',
            '180.129',
            '180.130',
            '180.136',
            '180.148',
            '180.149',
            '180.150',
            '180.152',
            '180.160',
            '180.178',
            '180.184',
            '180.188',
            '180.189',
            '180.200',
            '180.201',
            '180.202',
            '180.208',
            '180.210',
            '180.212',
            '180.222',
            '180.223',
            '180.233',
            '180.235',
            '182.16',
            '182.18',
            '182.23',
            '182.32',
            '182.48',
            '182.49',
            '182.50',
            '182.51',
            '182.54',
            '182.61',
            '182.80',
            '182.88',
            '182.92',
            '182.96',
            '182.128',
            '182.144',
            '182.157',
            '182.160',
            '182.174',
            '182.200',
            '182.236',
            '182.237',
            '182.238',
            '182.239',
            '182.240',
            '182.254',
            '182.255',
            '183.0',
            '183.64',
            '183.78',
            '183.81',
            '183.84',
            '183.91',
            '183.92',
            '183.128',
            '183.160',
            '183.168',
            '183.170',
            '183.172',
            '183.182',
            '183.184',
            '183.192',
            '185.203',
            '188.131',
            '192.51',
            '192.55',
            '192.102',
            '192.124',
            '192.140',
            '192.144',
            '192.197',
            '193.112',
            '198.175',
            '199.212',
            '202.0',
            '202.3',
            '202.4',
            '202.5',
            '202.6',
            '202.8',
            '202.9',
            '202.10',
            '202.12',
            '202.14',
            '202.20',
            '202.21',
            '202.22',
            '202.27',
            '202.36',
            '202.38',
            '202.40',
            '202.41',
            '202.43',
            '202.44',
            '202.45',
            '202.46',
            '202.47',
            '202.52',
            '202.53',
            '202.57',
            '202.58',
            '202.59',
            '202.60',
            '202.61',
            '202.62',
            '202.63',
            '202.65',
            '202.66',
            '202.67',
            '202.69',
            '202.70',
            '202.71',
            '202.72',
            '202.73',
            '202.74',
            '202.75',
            '202.76',
            '202.77',
            '202.78',
            '202.79',
            '202.80',
            '202.81',
            '202.83',
            '202.84',
            '202.85',
            '202.86',
            '202.87',
            '202.88',
            '202.89',
            '202.90',
            '202.91',
            '202.92',
            '202.93',
            '202.94',
            '202.95',
            '202.96',
            '202.112',
            '202.120',
            '202.122',
            '202.123',
            '202.124',
            '202.125',
            '202.127',
            '202.129',
            '202.130',
            '202.131',
            '202.133',
            '202.134',
            '202.136',
            '202.137',
            '202.140',
            '202.141',
            '202.142',
            '202.143',
            '202.144',
            '202.146',
            '202.147',
            '202.148',
            '202.149',
            '202.150',
            '202.151',
            '202.152',
            '202.153',
            '202.157',
            '202.158',
            '202.160',
            '202.162',
            '202.164',
            '202.165',
            '202.166',
            '202.168',
            '202.170',
            '202.171',
            '202.172',
            '202.173',
            '202.174',
            '202.176',
            '202.179',
            '202.180',
            '202.181',
            '202.182',
            '202.189',
            '202.191',
            '202.192',
            '203.0',
            '203.1',
            '203.2',
            '203.3',
            '203.4',
            '203.5',
            '203.6',
            '203.7',
            '203.8',
            '203.9',
            '203.10',
            '203.11',
            '203.12',
            '203.13',
            '203.14',
            '203.15',
            '203.16',
            '203.17',
            '203.18',
            '203.19',
            '203.20',
            '203.21',
            '203.22',
            '203.23',
            '203.24',
            '203.25',
            '203.26',
            '203.27',
            '203.28',
            '203.29',
            '203.30',
            '203.31',
            '203.32',
            '203.33',
            '203.34',
            '203.55',
            '203.56',
            '203.57',
            '203.62',
            '203.76',
            '203.77',
            '203.78',
            '203.79',
            '203.80',
            '203.81',
            '203.82',
            '203.83',
            '203.86',
            '203.88',
            '203.89',
            '203.90',
            '203.91',
            '203.92',
            '203.93',
            '203.94',
            '203.95',
            '203.99',
            '203.100',
            '203.104',
            '203.105',
            '203.107',
            '203.110',
            '203.114',
            '203.118',
            '203.119',
            '203.123',
            '203.128',
            '203.129',
            '203.130',
            '203.132',
            '203.134',
            '203.135',
            '203.142',
            '203.144',
            '203.145',
            '203.148',
            '203.149',
            '203.152',
            '203.153',
            '203.156',
            '203.158',
            '203.160',
            '203.161',
            '203.166',
            '203.167',
            '203.168',
            '203.170',
            '203.171',
            '203.174',
            '203.175',
            '203.176',
            '203.184',
            '203.185',
            '203.187',
            '203.189',
            '203.190',
            '203.191',
            '203.192',
            '203.193',
            '203.194',
            '203.195',
            '203.196',
            '203.201',
            '203.202',
            '203.205',
            '203.207',
            '203.208',
            '203.209',
            '203.212',
            '203.215',
            '203.217',
            '203.223',
            '204.52',
            '210.2',
            '210.5',
            '210.7',
            '210.12',
            '210.14',
            '210.15',
            '210.16',
            '210.21',
            '210.22',
            '210.23',
            '210.25',
            '210.26',
            '210.28',
            '210.32',
            '210.51',
            '210.52',
            '210.56',
            '210.72',
            '210.76',
            '210.78',
            '210.79',
            '210.82',
            '210.87',
            '210.185',
            '210.192',
            '211.64',
            '211.80',
            '211.96',
            '211.136',
            '211.144',
            '211.160',
            '212.64',
            '212.129',
            '218.0',
            '218.56',
            '218.64',
            '218.96',
            '218.100',
            '218.104',
            '218.108',
            '218.185',
            '218.192',
            '218.240',
            '218.249',
            '219.72',
            '219.82',
            '219.83',
            '219.90',
            '219.128',
            '219.216',
            '219.224',
            '219.242',
            '219.244',
            '220.101',
            '220.112',
            '220.152',
            '220.154',
            '220.158',
            '220.160',
            '220.192',
            '220.231',
            '220.232',
            '220.234',
            '220.242',
            '220.247',
            '220.248',
            '220.252',
            '221.0',
            '221.8',
            '221.12',
            '221.13',
            '221.14',
            '221.122',
            '221.128',
            '221.129',
            '221.130',
            '221.133',
            '221.136',
            '221.172',
            '221.176',
            '221.192',
            '221.196',
            '221.198',
            '221.199',
            '221.200',
            '221.208',
            '221.224',
            '222.16',
            '222.32',
            '222.64',
            '222.125',
            '222.126',
            '222.128',
            '222.160',
            '222.168',
            '222.176',
            '222.192',
            '222.240',
            '222.248',
            '223.0',
            '223.20',
            '223.27',
            '223.29',
            '223.64',
            '223.96',
            '223.112',
            '223.116',
            '223.120',
            '223.121',
            '223.122',
            '223.124',
            '223.128',
            '223.144',
            '223.160',
            '223.166',
            '223.192',
            '223.198',
            '223.201',
            '223.202',
            '223.208',
            '223.220',
            '223.223',
            '223.240',
            '223.248',
            '223.252',
            '223.254',
            '223.255',
            // '127.0'
        ];
        let clientIp = ctx.request.ip;
        let htmlText = '<meta name="viewport" content="width=device-width, initial-scale=1.0"><div style="font-size:20px;padding:10px;text-align:center">您的ip不允许访问！请访问 <a href="https://sebobao.com">色播宝 sebobao.com</a></div>';
        if(!clientIp) return ctx.body = htmlText;
        let clientIpArr = clientIp.split('.')
        let clientIpBefore = clientIpArr[0] + '.' + clientIpArr[1]
        let isDisabledIp = 0;
        if (firbideip.includes(clientIpBefore)) {
            isDisabledIp = 1
        }
        if (isDisabledIp) {
            await next();
        } else {
            let result = {}
            let { domain } = await ctx.service.utils.getSiteInfo();
            if(domain){
                domain.isOpenUrl = 3
                result.domain = domain
                await ctx.render('/template/jump01/index.html', result).catch(() => {
                    return ctx.render('error.html');
                });
            }else{
                ctx.status = 403;
                ctx.body = htmlText;
            }
        }
    }
}