import { deploy } from './ethers-lib'

(async () => {
    
    try{
        const pool = await deploy('StakePool', [])
        console.log(`pool address: ${pool.address}`)

        await pool.initialize("0xA6b4aecCb5A02037C9C575b34bB5191C3057D4b9", "0xA6b4aecCb5A02037C9C575b34bB5191C3057D4b9")

        console.log('测试质押开始....')
        await pool.deposit(0, [1,2,3])
        console.log('pool0 质押完成...')
        await pool.deposit(1, [6,7,8,9,10,11,12,13,14,15])
        console.log('pool1 质押完成...')
        var pool2: number[] = [];
        for(var i = 20; i < 50; i++){
            pool2.push(i);
        }
        await pool.deposit(2, pool2)
        console.log('pool2 质押完成...')

        var pool3: number[] = [];
        for(var i = 100; i < 140; i++){
            pool3.push(i);
        }
        await pool.deposit(3, pool3)
        console.log('pool3 质押完成...')

        console.log('测试质押结束...')

        console.log('测试解锁...')
        var blockTime = await pool.blockTime()
        console.log('设置解锁时间为： ' + blockTime)
        await pool.setUnlockTime(blockTime)

        for(var i = 0; i < 4; i++){
            console.log('pool' + i + '  取回...')
            await pool.withdraw(i)
        }

    }catch{
        console.error("发生错误...")
    }
  })()