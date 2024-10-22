import React from 'react'
import release from '../../../../public/Cashforgold/ReleasePledgedGold-1.jpg'
const ReleaseGoldX = () => {
  return (
    <div>
      <section class=" bg-[#7b071e]">
        <div class="container  p-6 mx-auto space-y-12 lg:px-8 "> <div>
          <h2 class="text-3xl  text-[#FFD700] px-2 pt-6 font-bold text-center sm:text-5xl">Release Pledged Gold for Cash</h2>
          <p class="max-w-3xl mx-auto mt-4 text-xl text-center text-white ">We repay the difference amount</p>
        </div>

          <div class="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div aria-hidden="true" class="mt-10 lg:mt-0">
              <img
                width="600"
                height="600"
                src={release.src}
                class="mx-auto rounded-lg shadow-lg dark-bg-gray-500"
                style={{ color: 'transparent' }} />
            </div>
            <div>
              <div class="mt-4 space-y-12">
                <div class="flex">

                  <div class="">
                    <h4 class="text-3xl font-bold text-[#FFD700]  ">Release Pledged Gold for Cash</h4>
                    <p class="mt-2 text-white ">Gold has been used as collateral for loans and financial transactions for centuries. Many individuals pledge their gold assets to secure loans or meet financial needs. This guide explains the process of releasing pledged gold and provides insights to make the process smoother.</p>
                  </div>
                </div>
                <div class="flex">

                  <div class="">
                    <h4 class="text-3xl font-bold  text-[#FFD700] ">Understanding Pledged Gold</h4>
                    <p class="mt-2 text-white ">Before diving into the release process, its essential to grasp what pledged gold represents. When you pledge gold, you are essentially using your gold jewelry, coins, or other gold items as collateral for a loan or credit facility.</p>
                  </div>
                </div>
                <div class="flex">

                  <div class="">

                    <p className='-mt-9 text-white'>This collateral serves as security for the lender, ensuring that they can recover their funds if you default on the loan. While the lender holds the pledged gold, you typically retain ownership rights to it.</p>
                  </div>
                </div>
                <div class="flex">

                  <div class="">

                    <p class="-mt-9 text-white  ">Pledging gold is a common practice, especially in regions where gold is highly valued. It can be an effective way to obtain financing without selling your precious assets. However, there may come a time when you wish to release the pledged gold, whether you’ve repaid the loan or have other reasons to want it back.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>


        </div>
      </section>

    </div>

  )
}
export default ReleaseGoldX