(function() {
	var appConstants = {
		appKey:process.env.APPKEY,
		appSecret:process.env.APPSECRET,
		atCodeURL:process.env.ATCODEURL,
		secCode:process.env.WSECCODE,
		wakeupURL:process.env.WAKEURL,
		wakeup_schedule:process.env.WAKEJOB,
		token_schedule:process.env.TOKENJOB,
		pickStock_schedule:process.env.SPICKJOB,
		trade_schedule:process.env.TRADEJOB,		
		getpos_schedule:process.env.GETPOSJOB,
		cancelall_schedule:process.env.CANCELALLJOB,
		exitpos_schedule:process.env.EXITPOSJOB,
		socket_schedule:process.env.SOCKDISCONJOB,
		stockpicks:process.env.SPICK,
		targetpcent:process.env.TRGTPCENT,
		nscrips:process.env.NOOFSCRIPS,
		tokenfile:process.env.TOKENFILE
	};
	
	var n50 = [
		{ex: "nse_eq",sym: "ADANIPORTS"},
		{ex: "nse_eq",sym: "ASIANPAINT"},
		{ex: "nse_eq",sym: "AXISBANK"},
		//{ex:"nse_eq",sym:"BAJAJ-AUTO"},
		{ex:"nse_eq",sym:"BAJFINANCE"},
		//{ex:"nse_eq",sym:"BAJAJFINSV"},
		{ex: "nse_eq",sym: "BPCL"},
		{ex: "nse_eq",sym: "BHARTIARTL"},
		{ex: "nse_eq",sym: "INFRATEL"},
		{ex: "nse_eq",sym: "CIPLA"},
		{ex: "nse_eq",sym: "COALINDIA"},
		{ex:"nse_eq",sym:"DRREDDY"},
		//{ex:"nse_eq",sym:"EICHERMOT"},
		{ex: "nse_eq",sym: "GAIL"},
		{ex: "nse_eq",sym: "GRASIM"},
		{ex: "nse_eq",sym: "HCLTECH"},
		//{ex:"nse_eq",sym:"HDFCBANK"},
		//{ex:"nse_eq",sym:"HEROMOTOCO"},
		{ex: "nse_eq",sym: "HINDALCO"},
		{ex: "nse_eq",sym: "HINDPETRO"},
		//{ex:"nse_eq",sym:"HINDUNILVR"},
		//{ex:"nse_eq",sym:"HDFC"},
		{ex: "nse_eq",sym: "ITC"},
		{ex: "nse_eq",sym: "ICICIBANK"},
		{ex: "nse_eq",sym: "IBULHSGFIN"},
		{ex: "nse_eq",sym: "IOC"},
		{ex: "nse_eq",sym: "INDUSINDBK"},
		{ex: "nse_eq",sym: "INFY"},
		{ex: "nse_eq",sym: "JSWSTEEL"},
		//{ex:"nse_eq",sym:"KOTAKBANK"},
		{ex:"nse_eq",sym:"LT"},
		{ex: "nse_eq",sym: "M&M"},
		//{ex:"nse_eq",sym:"MARUTI"},
		{ex: "nse_eq",sym: "NTPC"},
		{ex: "nse_eq",sym: "ONGC"},
		{ex: "nse_eq",sym: "POWERGRID"},
		{ex: "nse_eq",sym: "RELIANCE"},
		{ex: "nse_eq",sym: "SBIN"},
		{ex: "nse_eq",sym: "SUNPHARMA"},
		//{ex:"nse_eq",sym:"TCS"},
		{ex: "nse_eq",sym: "TATAMOTORS"},
		{ex: "nse_eq",sym: "TATASTEEL"},
		{ex: "nse_eq",sym: "TECHM"},
		{ex: "nse_eq",sym: "TITAN"},
		{ex: "nse_eq",sym: "UPL"},
		//{ex:"nse_eq",sym:"ULTRACEMCO"},
		{ex: "nse_eq",sym: "VEDL"},
		{ex: "nse_eq",sym: "WIPRO"},
		{ex: "nse_eq",sym: "YESBANK"},
		{ex: "nse_eq",sym: "ZEEL"}
	];

	var nfostocks=[
		{ex:"nse_eq",sym:"ACC"},
		{ex:"nse_eq",sym:"ADANIENT"},
		{ex:"nse_eq",sym:"ADANIPORTS"},
		{ex:"nse_eq",sym:"ADANIPOWER"},
		{ex:"nse_eq",sym:"AJANTPHARM"},
		{ex:"nse_eq",sym:"ALBK"},
		{ex:"nse_eq",sym:"AMARAJABAT"},
		{ex:"nse_eq",sym:"AMBUJACEM"},
		{ex:"nse_eq",sym:"APOLLOHOSP"},
		{ex:"nse_eq",sym:"APOLLOTYRE"},
		{ex:"nse_eq",sym:"ARVIND"},
		{ex:"nse_eq",sym:"ASHOKLEY"},
		{ex:"nse_eq",sym:"ASIANPAINT"},
		{ex:"nse_eq",sym:"AUROPHARMA"},
		{ex:"nse_eq",sym:"AXISBANK"},
		//{ex:"nse_eq",sym:"BAJAJ-AUTO"},
		//{ex:"nse_eq",sym:"BAJAJFINSV"},
		{ex:"nse_eq",sym:"BAJFINANCE"},
		{ex:"nse_eq",sym:"BALKRISIND"},
		{ex:"nse_eq",sym:"BANKBARODA"},
		{ex:"nse_eq",sym:"BANKINDIA"},
		{ex:"nse_eq",sym:"BATAINDIA"},
		{ex:"nse_eq",sym:"BEL"},
		{ex:"nse_eq",sym:"BEML"},
		{ex:"nse_eq",sym:"BERGEPAINT"},
		{ex:"nse_eq",sym:"BHARATFIN"},
		{ex:"nse_eq",sym:"BHARATFORG"},
		{ex:"nse_eq",sym:"BHARTIARTL"},
		{ex:"nse_eq",sym:"BHEL"},
		{ex:"nse_eq",sym:"BIOCON"},
		//{ex:"nse_eq",sym:"BOSCHLTD"},
		{ex:"nse_eq",sym:"BPCL"},
		{ex:"nse_eq",sym:"BRITANNIA"},
		{ex:"nse_eq",sym:"CADILAHC"},
		{ex:"nse_eq",sym:"CANBK"},
		{ex:"nse_eq",sym:"CANFINHOME"},
		{ex:"nse_eq",sym:"CAPF"},
		{ex:"nse_eq",sym:"CASTROLIND"},
		{ex:"nse_eq",sym:"CEATLTD"},
		{ex:"nse_eq",sym:"CENTURYTEX"},
		{ex:"nse_eq",sym:"CESC"},
		{ex:"nse_eq",sym:"CGPOWER"},
		{ex:"nse_eq",sym:"CHENNPETRO"},
		{ex:"nse_eq",sym:"CHOLAFIN"},
		{ex:"nse_eq",sym:"CIPLA"},
		{ex:"nse_eq",sym:"COALINDIA"},
		{ex:"nse_eq",sym:"COLPAL"},
		{ex:"nse_eq",sym:"CONCOR"},
		{ex:"nse_eq",sym:"CUMMINSIND"},
		{ex:"nse_eq",sym:"DABUR"},
		{ex:"nse_eq",sym:"DCBBANK"},
		{ex:"nse_eq",sym:"DHFL"},
		{ex:"nse_eq",sym:"DISHTV"},
		{ex:"nse_eq",sym:"DIVISLAB"},
		{ex:"nse_eq",sym:"DLF"},
		{ex:"nse_eq",sym:"DRREDDY"},
		//{ex:"nse_eq",sym:"EICHERMOT"},
		{ex:"nse_eq",sym:"ENGINERSIN"},
		{ex:"nse_eq",sym:"EQUITAS"},
		{ex:"nse_eq",sym:"ESCORTS"},
		{ex:"nse_eq",sym:"EXIDEIND"},
		{ex:"nse_eq",sym:"FEDERALBNK"},
		{ex:"nse_eq",sym:"GAIL"},
		{ex:"nse_eq",sym:"GLENMARK"},
		{ex:"nse_eq",sym:"GMRINFRA"},
		{ex:"nse_eq",sym:"GODFRYPHLP"},
		{ex:"nse_eq",sym:"GODREJCP"},
		{ex:"nse_eq",sym:"GODREJIND"},
		{ex:"nse_eq",sym:"GRASIM"},
		{ex:"nse_eq",sym:"GSFC"},
		{ex:"nse_eq",sym:"HAVELLS"},
		{ex:"nse_eq",sym:"HCLTECH"},
		//{ex:"nse_eq",sym:"HDFC"},
		{ex:"nse_eq",sym:"HDFCBANK"},
		//{ex:"nse_eq",sym:"HEROMOTOCO"},
		{ex:"nse_eq",sym:"HEXAWARE"},
		{ex:"nse_eq",sym:"HINDALCO"},
		{ex:"nse_eq",sym:"HINDPETRO"},
		{ex:"nse_eq",sym:"HINDUNILVR"},
		{ex:"nse_eq",sym:"HINDZINC"},
		{ex:"nse_eq",sym:"IBULHSGFIN"},
		{ex:"nse_eq",sym:"ICICIBANK"},
		{ex:"nse_eq",sym:"ICICIPRULI"},
		{ex:"nse_eq",sym:"IDBI"},
		{ex:"nse_eq",sym:"IDEA"},
		{ex:"nse_eq",sym:"IDFC"},
		{ex:"nse_eq",sym:"IDFCBANK"},
		{ex:"nse_eq",sym:"IFCI"},
		{ex:"nse_eq",sym:"IGL"},
		{ex:"nse_eq",sym:"INDIACEM"},
		{ex:"nse_eq",sym:"INDIANB"},
		{ex:"nse_eq",sym:"INDIGO"},
		{ex:"nse_eq",sym:"INDUSINDBK"},
		{ex:"nse_eq",sym:"INFIBEAM"},
		{ex:"nse_eq",sym:"INFRATEL"},
		{ex:"nse_eq",sym:"INFY"},
		{ex:"nse_eq",sym:"IOC"},
		{ex:"nse_eq",sym:"IRB"},
		{ex:"nse_eq",sym:"ITC"},
		{ex:"nse_eq",sym:"JETAIRWAYS"},
		{ex:"nse_eq",sym:"JINDALSTEL"},
		{ex:"nse_eq",sym:"JISLJALEQS"},
		{ex:"nse_eq",sym:"JPASSOCIAT"},
		{ex:"nse_eq",sym:"JSWSTEEL"},
		{ex:"nse_eq",sym:"JUBLFOOD"},
		{ex:"nse_eq",sym:"JUSTDIAL"},
		{ex:"nse_eq",sym:"KAJARIACER"},
		{ex:"nse_eq",sym:"KOTAKBANK"},
		{ex:"nse_eq",sym:"KPIT"},
		{ex:"nse_eq",sym:"KSCL"},
		{ex:"nse_eq",sym:"KTKBANK"},
		{ex:"nse_eq",sym:"L&TFH"},
		{ex:"nse_eq",sym:"LICHSGFIN"},
		{ex:"nse_eq",sym:"LT"},
		{ex:"nse_eq",sym:"LUPIN"},
		{ex:"nse_eq",sym:"M&M"},
		{ex:"nse_eq",sym:"M&MFIN"},
		{ex:"nse_eq",sym:"MANAPPURAM"},
		{ex:"nse_eq",sym:"MARICO"},
		//{ex:"nse_eq",sym:"MARUTI"},
		{ex:"nse_eq",sym:"MCDOWELL-N"},
		{ex:"nse_eq",sym:"MCX"},
		{ex:"nse_eq",sym:"MFSL"},
		{ex:"nse_eq",sym:"MGL"},
		{ex:"nse_eq",sym:"MINDTREE"},
		{ex:"nse_eq",sym:"MOTHERSUMI"},
		{ex:"nse_eq",sym:"MRF"},
		{ex:"nse_eq",sym:"MRPL"},
		{ex:"nse_eq",sym:"MUTHOOTFIN"},
		{ex:"nse_eq",sym:"NATIONALUM"},
		{ex:"nse_eq",sym:"NBCC"},
		{ex:"nse_eq",sym:"NCC"},
		{ex:"nse_eq",sym:"NESTLEIND"},
		{ex:"nse_eq",sym:"NHPC"},
		{ex:"nse_eq",sym:"NIITTECH"},
		{ex:"nse_eq",sym:"NMDC"},
		{ex:"nse_eq",sym:"NTPC"},
		{ex:"nse_eq",sym:"OFSS"},
		{ex:"nse_eq",sym:"OIL"},
		{ex:"nse_eq",sym:"ONGC"},
		{ex:"nse_eq",sym:"ORIENTBANK"},
		{ex:"nse_eq",sym:"PAGEIND"},
		{ex:"nse_eq",sym:"PCJEWELLER"},
		{ex:"nse_eq",sym:"PEL"},
		{ex:"nse_eq",sym:"PETRONET"},
		{ex:"nse_eq",sym:"PFC"},
		{ex:"nse_eq",sym:"PIDILITIND"},
		{ex:"nse_eq",sym:"PNB"},
		{ex:"nse_eq",sym:"POWERGRID"},
		{ex:"nse_eq",sym:"PTC"},
		{ex:"nse_eq",sym:"PVR"},
		{ex:"nse_eq",sym:"RAMCOCEM"},
		{ex:"nse_eq",sym:"RAYMOND"},
		{ex:"nse_eq",sym:"RBLBANK"},
		{ex:"nse_eq",sym:"RCOM"},
		{ex:"nse_eq",sym:"RECLTD"},
		{ex:"nse_eq",sym:"RELCAPITAL"},
		{ex:"nse_eq",sym:"RELIANCE"},
		{ex:"nse_eq",sym:"RELINFRA"},
		{ex:"nse_eq",sym:"REPCOHOME"},
		{ex:"nse_eq",sym:"RPOWER"},
		{ex:"nse_eq",sym:"SAIL"},
		{ex:"nse_eq",sym:"SBIN"},
		{ex:"nse_eq",sym:"SHREECEM"},
		{ex:"nse_eq",sym:"SIEMENS"},
		{ex:"nse_eq",sym:"SOUTHBANK"},
		{ex:"nse_eq",sym:"SREINFRA"},
		{ex:"nse_eq",sym:"SRF"},
		{ex:"nse_eq",sym:"SRTRANSFIN"},
		{ex:"nse_eq",sym:"STAR"},
		{ex:"nse_eq",sym:"SUNPHARMA"},
		{ex:"nse_eq",sym:"SUNTV"},
		{ex:"nse_eq",sym:"SUZLON"},
		{ex:"nse_eq",sym:"SYNDIBANK"},
		{ex:"nse_eq",sym:"TATACHEM"},
		{ex:"nse_eq",sym:"TATACOMM"},
		{ex:"nse_eq",sym:"TATAELXSI"},
		{ex:"nse_eq",sym:"TATAGLOBAL"},
		{ex:"nse_eq",sym:"TATAMOTORS"},
		{ex:"nse_eq",sym:"TATAMTRDVR"},
		{ex:"nse_eq",sym:"TATAPOWER"},
		{ex:"nse_eq",sym:"TATASTEEL"},
		{ex:"nse_eq",sym:"TCS"},
		{ex:"nse_eq",sym:"TECHM"},
		{ex:"nse_eq",sym:"TITAN"},
		{ex:"nse_eq",sym:"TORNTPHARM"},
		{ex:"nse_eq",sym:"TORNTPOWER"},
		{ex:"nse_eq",sym:"TV18BRDCST"},
		{ex:"nse_eq",sym:"TVSMOTOR"},
		{ex:"nse_eq",sym:"UBL"},
		{ex:"nse_eq",sym:"UJJIVAN"},
		{ex:"nse_eq",sym:"ULTRACEMCO"},
		{ex:"nse_eq",sym:"UNIONBANK"},
		{ex:"nse_eq",sym:"UPL"},
		{ex:"nse_eq",sym:"VEDL"},
		{ex:"nse_eq",sym:"VGUARD"},
		{ex:"nse_eq",sym:"VOLTAS"},
		{ex:"nse_eq",sym:"WIPRO"},
		{ex:"nse_eq",sym:"WOCKPHARMA"},
		{ex:"nse_eq",sym:"YESBANK"},
		{ex:"nse_eq",sym:"ZEEL"}
	];
	
	module.exports.getAppConstants = function() {
        	return appConstants;
    	}
	
	module.exports.getN50 = function() {
        	return n50;
    	}
	
	module.exports.getAllNFO = function() {
        	return nfostocks;
    	}	

}());
