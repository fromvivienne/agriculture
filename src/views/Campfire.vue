<template>
	<div class="campfire">
		<div class="carousel">
			<v-carousel :show-arrows="true" cycle interval="5000">
				<v-carousel-item
					v-for="(item,i) in items"
					:key="i"
					:src="item.src"
				></v-carousel-item>
			</v-carousel>
			<div class="title text-h5 mt-4 mb-4 pt-4 pb-4">▼ あなたのかわりに、「地方移住」はじめました。</div>
			<div>突然ですが、都会でがんばる日々に、漠然とした不安や違和感はありませんか？<br><br>たとえば、がんばり続けた先に、なにも無いような気がする……。<br>たとえば、子どもの成長にとって、いまが最適な環境なのか不安……。<br>たとえば、行きすぎた消費社会に違和感がある……。<br><br>そんな不安を解消する手段として、いま「地方移住」が再注目されています。<br><br><br>「地方移住に興味はあるけど、なにも知らずに行くのはやっぱり怖い……」<br>と思う方もいるでしょう。<br>それは当然の反応だと思います。<br><br><br>「どうなるサロン」では、<br>地方移住という新たな”ライフスタイル”を試したい方に向けて、あなたのかわりに「地方移住」を体験中です。<br><br>「地方移住」といっても、ただ地方へ移住することが目的ではありません。<br><br>都会の生活では得られなかった満足感や幸福感を、自然に囲まれた田舎で、”農業”や”起業”を通じて見つめ直すことが目的です。<br><br>もちろん、あなたと同じで、わたしたちも何もわからないゼロからのスタートです。<br>ゼロから地方移住をして、試行錯誤の末に成功したり、失敗したりする様子を、すべて隠すことなくお見せします。<br><br>等身大の「地方移住」を、「どうなるサロン」でじっくりご覧ください。<br>”現在”の延長線上では得られない、つぎの時代の「幸せ」が見つかるかもしれません。<br></div>
			<div class="title text-h5 mt-4 mb-4 pt-4 pb-4">▼ つぎの時代の「幸せ」を、ひと足先にお届けします。</div>
			<div><span style="font-weight: bold">コロナ騒動をきっかけに、東京を離れてみた！</span><br><br>東京で長年暮らした3つのファミリーと１人の若者が、2020年4月に実際に地域に移住してみました！<br>そこでの発見と、驚きと、悟り。。。（笑）<br>これはぜひとも、同じような境遇の方々にシェアしたい！<br><br><span style="font-weight: bold">本気でそう思いました。</span></div>
			<div class="title text-h5 mt-4 mb-4 pt-4 pb-4">▼ 『どうなるサロン』で得られる5つのこと</div>
			<div>
				<v-tabs
					v-model="tab"
					background-color="transparent"
					color="basil"
					grow
				>
					<v-tab
						v-for="item in fiveParts"
						:key="item"
					>
						{{ item }}
					</v-tab>
				</v-tabs>
				<v-tabs-items v-model="tab">
					<v-tab-item
						v-for="item in fiveParts"
						:key="item"
					>
						<v-card
							color="basil"
							flat
						>
							<v-card-text>{{ text }}</v-card-text>
						</v-card>
					</v-tab-item>
				</v-tabs-items>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
      return {
		tab: null,
        fiveParts: [
          "移住のホント", "起業のホント", "食と健康のホント", "子どもの教育のホント", "参加して実践する場",
        ],
        text: "実際のところを疑似体験できます",
        items: [
          {
			src: 'https://static.camp-fire.jp/uploads/project_version/image/594619/f7c27c41-8bde-4f49-8cf6-ff4d4378f293.jpg'
          },
          {
            src: 'https://static.camp-fire.jp/uploads/project_version/image/594619/2309d000-ff76-4995-b861-635b2d98fc3a.jpg',
          },
          {
			src: 'https://static.camp-fire.jp/uploads/project_version/image/594619/e09b7a14-6b6d-42ed-b1da-cef2f4ba1f2d.JPG'
          },
          {
			src: 'https://static.camp-fire.jp/uploads/project_version/image/594619/203bdad2-db7b-45d3-be27-41f01a49f6e5.jpg'
          },
          {
			src: 'https://static.camp-fire.jp/uploads/project_version/image/594619/f141ae69-9ec6-4d58-b359-ee161f5bf49f.JPG'
          },
        ],
      }
    },
}
</script>

<style>
	.campfile {
		width: 80%;
	}
	.carousel {
		width: 70%;
		margin: 10px auto;
	}
	.title {
		width: 80%;
		border-top: 2px solid black;
		border-bottom: 2px solid black;
	}
</style>