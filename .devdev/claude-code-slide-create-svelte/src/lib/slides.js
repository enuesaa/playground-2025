export default [
	{
		id: 1,
		content: `
			<h1>Claude Code にスライドを作ってもらった</h1>
			<div style="text-align: center; margin-top: 3rem;">
				<p style="font-size: 1.5rem; color: #777;">Web-based Slide Presentation</p>
				<p style="font-size: 1.2rem; color: #999; margin-top: 2rem;">
					Built with Svelte 3 + SvelteKit + Vite
				</p>
			</div>
		`
	},
	{
		id: 2,
		content: `
			<h2>概要</h2>
			<div style="text-align: left;">
				<h3>🎯 プロジェクト目標</h3>
				<ul>
					<li>Claude Code を使用してウェブベースのスライドプレゼンテーションを作成</li>
					<li>モダンな技術スタックでの実装</li>
					<li>PDF エクスポート機能の提供</li>
					<li>美しいアニメーションとユーザーエクスペリエンス</li>
				</ul>
				
				<h3>✨ 主な特徴</h3>
				<ul>
					<li><strong class="highlight">レスポンシブデザイン</strong> - あらゆるデバイスに対応</li>
					<li><strong class="underline">キーボードナビゲーション</strong> - 直感的な操作</li>
					<li><strong class="circle">滑らかなアニメーション</strong> - CSS トランジション</li>
					<li><strong>モダンな見た目</strong> - グラデーションとガラス効果</li>
				</ul>
				
				<h3>🛠️ 技術スタック</h3>
				<p>Svelte 3, SvelteKit, Vite, Playwright を使用した最新の開発環境</p>
				
				<h3>✨ 尖った技術追加</h3>
				<ul>
					<li><strong class="highlight">Three.js</strong> - 3Dパーティクル背景エフェクト</li>
					<li><strong class="underline">Rough-notation</strong> - 手書き風アノテーション</li>
					<li><strong class="circle">@theatre/core</strong> - 高度なアニメーションエンジン</li>
				</ul>
			</div>
		`
	},
	{
		id: 3,
		content: `
			<h2>CLAUDE.md</h2>
			<div class="claude-md-content">
				<h3>作って欲しいもの</h3>
				<p>ウェブベースのスライドを作って欲しい。コンテンツも考えて。</p>
				
				<h4>スライドの要件</h4>
				<ul>
					<li>ウェブベースのスライド</li>
					<li>slidev みたいな。</li>
					<li>編集機能は不要</li>
					<li>スライドのコンテンツは、HTML タグでコーディングしてしまってよい</li>
					<li>PDF でエクスポートできるようにしてほしい
						<ul><li>npm scripts で playwright を呼び出すレベルで良い。</li></ul>
					</li>
				</ul>
				
				<h4>コンテンツ</h4>
				<p>スライドを作る時に考えたことを書いて。</p>
				<ul>
					<li>最大10スライド</li>
					<li>1スライド目にはタイトル「Claude Code にスライドを作ってもらった」を表示する</li>
					<li>2スライド目には「CLAUDE.md」を表示する
						<ul>
							<li>全体が収まるよう。</li>
							<li>難しければ縦スクロールできるようにして。</li>
						</ul>
					</li>
					<li>3スライド目には、実装の流れを記入して。</li>
					<li>4スライド目 ~ 10 スライド目は自由。</li>
				</ul>
				
				<h3>技術要件</h3>
				<h4>MUST で使用して欲しいもの</h4>
				<ul>
					<li>Svelte 3</li>
					<li>SvelteKit</li>
					<li>Vite</li>
					<li>Node.js 22</li>
				</ul>
				
				<h4>他</h4>
				<p>他に必要なライブラリがあれば、自由に選んで良い</p>
				<ul>
					<li>とがった技術選定をしてほしい。</li>
					<li>最近どういうのが流行っているのか興味あるので。</li>
				</ul>
				
				<h4>アニメーション</h4>
				<p>可能であれば、スライドをめくる時にCSSアニメーションを入れて欲しい。</p>
			</div>
		`
	},
	{
		id: 4,
		content: `
			<h2>実装の流れ</h2>
			<div style="text-align: left;">
				<h3>🛠️ セットアップ</h3>
				<ul>
					<li>SvelteKit プロジェクトを <code>sv create</code> で初期化</li>
					<li>Playwright をインストールして PDF エクスポート機能を準備</li>
				</ul>
				
				<h3>🎨 コンポーネント設計</h3>
				<ul>
					<li><code>SlidePresentation.svelte</code> - メインのスライド表示コンポーネント</li>
					<li><code>slides.js</code> - スライドデータを管理</li>
					<li>キーボードナビゲーション対応（矢印キー、スペース、Home/End）</li>
				</ul>
				
				<h3>✨ 特徴</h3>
				<ul>
					<li>CSS Grid + Flexbox でレスポンシブレイアウト</li>
					<li>Cubic-bezier を使った滑らかなアニメーション</li>
					<li>Backdrop-filter でモダンなガラス効果</li>
					<li>グラデーション背景とスライドドット表示</li>
				</ul>
				
				<h3>🎭 インタラクティブ要素</h3>
				<ul>
					<li><strong class="highlight">Three.js パーティクル</strong> - リアルタイム3D背景</li>
					<li><strong class="underline">Rough-notation</strong> - スライド切り替え時の手書きエフェクト</li>
					<li><strong class="circle">動的アノテーション</strong> - ハイライト、下線、円形マーカー</li>
				</ul>
			</div>
		`
	},
	{
		id: 5,
		content: `
			<h2>モダンな技術選定</h2>
			<div style="text-align: left;">
				<h3>🚀 フロントエンド</h3>
				<ul>
					<li><strong class="highlight">Svelte 3</strong> - コンパイル時最適化でバンドルサイズ削減</li>
					<li><strong class="underline">SvelteKit</strong> - フルスタックフレームワーク</li>
					<li><strong class="circle">Vite</strong> - 高速な開発サーバーとHMR</li>
				</ul>
				
				<h3>🎨 CSS技術</h3>
				<ul>
					<li><strong>CSS Grid & Flexbox</strong> - モダンレイアウト</li>
					<li><strong>Backdrop-filter</strong> - ガラスエフェクト</li>
					<li><strong>Cubic-bezier</strong> - 滑らかなイージング</li>
					<li><strong>CSS Variables</strong> - 動的テーマ対応</li>
				</ul>
				
				<h3>🔧 ツール</h3>
				<ul>
					<li><strong>Playwright</strong> - 自動化テストとPDF生成</li>
					<li><strong>ESModules</strong> - モジュール分割</li>
				</ul>
				
				<h3>🎨 視覚効果ライブラリ</h3>
				<ul>
					<li><strong class="highlight">Three.js</strong> - WebGL 3Dレンダリング</li>
					<li><strong class="underline">Rough-notation</strong> - SVG手書きアニメーション</li>
					<li><strong class="circle">@theatre/core</strong> - タイムライン型アニメーション</li>
				</ul>
			</div>
		`
	},
	{
		id: 6,
		content: `
			<h2>アニメーション設計</h2>
			<div style="text-align: left;">
				<h3>🎭 トランジション戦略</h3>
				<ul>
					<li><strong>Scale効果</strong> - スライド切り替え時に0.95倍に縮小</li>
					<li><strong>Opacity変化</strong> - 透明度を0.8に下げて切り替え感を演出</li>
					<li><strong>500ms duration</strong> - 適度な速度で違和感なし</li>
				</ul>
				
				<h3>🎨 視覚効果</h3>
				<ul>
					<li><strong>Hover animations</strong> - ボタンにマウスオーバー時のスケール効果</li>
					<li><strong>Active states</strong> - ドット表示でアクティブスライドを強調</li>
					<li><strong>Disabled states</strong> - 境界でのボタン無効化</li>
				</ul>
				
				<h3>⚡ パフォーマンス</h3>
				<ul>
					<li><strong>Transform & Opacity</strong> - GPU加速を活用</li>
					<li><strong>Will-change</strong> - 必要な場合のみ最適化</li>
					<li><strong>Debounce</strong> - 連続操作の制御</li>
				</ul>
				
				<h3>🌟 リアルタイム効果</h3>
				<ul>
					<li><strong class="highlight">Three.js Animation</strong> - 60fps 3Dパーティクル</li>
					<li><strong class="underline">Rough-notation Timing</strong> - 800-1200ms手書きアニメ</li>
					<li><strong class="circle">Interactive Annotations</strong> - スライド遷移連動</li>
				</ul>
			</div>
		`
	},
	{
		id: 7,
		content: `
			<h2>ユーザーエクスペリエンス</h2>
			<div style="text-align: left;">
				<h3>🎯 ナビゲーション</h3>
				<ul>
					<li><strong>キーボード操作</strong> - 矢印キー、スペース、Home/End</li>
					<li><strong>マウス操作</strong> - ボタンクリック、ドットクリック</li>
					<li><strong>視覚フィードバック</strong> - アニメーション状態表示</li>
				</ul>
				
				<h3>📱 レスポンシブ対応</h3>
				<ul>
					<li><strong>Viewport units</strong> - 100vh/100vw でフルスクリーン</li>
					<li><strong>Flexible sizing</strong> - max-width/max-height で調整</li>
					<li><strong>Touch friendly</strong> - 十分なタップ領域</li>
				</ul>
				
				<h3>♿ アクセシビリティ</h3>
				<ul>
					<li><strong>Semantic HTML</strong> - 適切な要素の使用</li>
					<li><strong>Keyboard navigation</strong> - フルキーボード対応</li>
					<li><strong>Focus management</strong> - フォーカス状態の管理</li>
				</ul>
			</div>
		`
	},
	{
		id: 8,
		content: `
			<h2>PDF エクスポート機能</h2>
			<div style="text-align: left;">
				<h3>🎯 実装戦略</h3>
				<ul>
					<li><strong>Playwright</strong> - ヘッドレスブラウザでページ操作</li>
					<li><strong>各スライド個別生成</strong> - URLパラメータでスライド指定</li>
					<li><strong>PDF結合</strong> - 複数ページを1つのPDFに統合</li>
				</ul>
				
				<h3>📄 品質設定</h3>
				<ul>
					<li><strong>A4サイズ</strong> - 標準的な印刷サイズ</li>
					<li><strong>高解像度</strong> - 印刷に適した画質</li>
					<li><strong>背景込み</strong> - グラデーション背景も含める</li>
				</ul>
				
				<h3>⚙️ 自動化</h3>
				<ul>
					<li><strong>npm script</strong> - <code>npm run export-pdf</code></li>
					<li><strong>開発サーバー起動</strong> - 自動でサーバー開始</li>
					<li><strong>出力ファイル</strong> - <code>slides.pdf</code> で保存</li>
				</ul>
			</div>
		`
	},
	{
		id: 9,
		content: `
			<h2>コードアーキテクチャ</h2>
			<div style="text-align: left;">
				<h3>🏗️ ファイル構造</h3>
				<pre><code>src/
├── lib/
│   ├── SlidePresentation.svelte  # メインコンポーネント
│   └── slides.js                 # スライドデータ
├── routes/
│   └── +page.svelte             # エントリーポイント
└── app.html                     # HTMLテンプレート</code></pre>
				
				<h3>🎨 スタイル設計</h3>
				<ul>
					<li><strong>Component-scoped CSS</strong> - Svelteの標準機能</li>
					<li><strong>CSS Custom Properties</strong> - テーマ変数</li>
					<li><strong>Global styles</strong> - :global() での共通スタイル</li>
				</ul>
				
				<h3>⚡ 状態管理</h3>
				<ul>
					<li><strong>Local state</strong> - コンポーネント内で完結</li>
					<li><strong>Reactive declarations</strong> - $: で自動更新</li>
					<li><strong>Event handling</strong> - onMount でライフサイクル管理</li>
				</ul>
			</div>
		`
	},
	{
		id: 10,
		content: `
			<h2>今後の拡張可能性</h2>
			<div style="text-align: left;">
				<h3>🚀 機能追加</h3>
				<ul>
					<li><strong>スライドエディター</strong> - リアルタイム編集機能</li>
					<li><strong>テーマシステム</strong> - 複数テーマの切り替え</li>
					<li><strong>プレゼンテーションモード</strong> - 発表者用ビュー</li>
					<li><strong>音声ナレーション</strong> - Web Speech API連携</li>
				</ul>
				
				<h3>📱 デバイス対応</h3>
				<ul>
					<li><strong>タッチジェスチャー</strong> - スワイプ操作対応</li>
					<li><strong>PWA化</strong> - オフライン対応</li>
					<li><strong>リモート同期</strong> - 複数デバイス間同期</li>
				</ul>
				
				<h3>🎨 視覚強化</h3>
				<ul>
					<li><strong>3D効果</strong> - CSS 3D transforms</li>
					<li><strong>パーティクル効果</strong> - Canvas/WebGL</li>
					<li><strong>インタラクティブコンテンツ</strong> - 埋め込み対応</li>
				</ul>
			</div>
		`
	},
	{
		id: 11,
		content: `
			<h1>完成！</h1>
			<div style="text-align: center; margin-top: 3rem;">
				<h3>🎉 Claude Code でスライド作成完了</h3>
				<p style="font-size: 1.4rem; color: #666; margin: 2rem 0;">
					モダンな技術スタックで<br>
					美しいスライドプレゼンテーションを実現
				</p>
				
				<div style="background: #f8f9fa; padding: 2rem; border-radius: 12px; margin: 2rem 0;">
					<h4 style="color: #495057; margin-bottom: 1rem;">使用技術</h4>
					<p style="color: #6c757d;">
						<span class="highlight">Svelte 3 • SvelteKit • Vite</span> • <span class="underline">Playwright</span><br>
						<span class="circle">Three.js • Rough-notation</span> • CSS Grid
					</p>
				</div>
				
				<div style="background: #e3f2fd; padding: 1.5rem; border-radius: 12px; margin: 1rem 0;">
					<h4 style="color: #1565c0; margin-bottom: 0.5rem;">🚀 尖った技術</h4>
					<p style="color: #1976d2; font-size: 0.9rem;">
						<strong>Rough-notation</strong>: 手書き風アノテーション<br>
						<strong>Three.js</strong>: 3Dパーティクル背景エフェクト
					</p>
				</div>
				
				<p style="font-size: 1.2rem; color: #999;">
					<strong>PDF Export:</strong> <code>npm run export-pdf</code><br>
					<strong>Dev Server:</strong> <code>npm run dev</code>
				</p>
			</div>
		`
	}
];