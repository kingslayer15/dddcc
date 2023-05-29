import { deploy } from './ethers-lib'

(async () => {
    
    try{
        const pool = await deploy('StakePool', [])
        console.log(`pool address: ${pool.address}`)
        const fcc = await deploy('FCC', [])
        console.log('fcc address: ' + fcc.address)
        await pool.initialize(fcc.address, "0x581B2C66362677EB8765fB103230351A1E437d08")
        await fcc.approve(pool.address, "10000000000000000000000000")//1000万
        await pool.setFccPool("0xA6b4aecCb5A02037C9C575b34bB5191C3057D4b9")
        console.log('部署完成...')
    }catch{
        console.error("发生错误...")
    }
  })()