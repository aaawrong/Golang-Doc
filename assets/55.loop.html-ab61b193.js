import{_ as p,V as t,W as o,X as s,Y as n,$ as c,Z as a,F as l}from"./framework-44a66fc7.js";const r={},i=a(`<h1 id="循环控制" tabindex="-1"><a class="header-anchor" href="#循环控制" aria-hidden="true">#</a> 循环控制</h1><blockquote><p>计算机最擅长的事情就是做重复的工作。</p></blockquote><p>在Go中，仅有一种循环语句：<code>for</code>，Go抛弃了<code>while</code>语句，<code>for</code>语句可以被当作<code>while</code>来使用。</p><br><h2 id="for" tabindex="-1"><a class="header-anchor" href="#for" aria-hidden="true">#</a> for</h2><p>语句格式如下</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">for</span> init statement<span class="token punctuation">;</span> expression<span class="token punctuation">;</span> post statement <span class="token punctuation">{</span>
	execute statement
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当只保留循环条件时，就变成了<code>while</code>。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">for</span> expression <span class="token punctuation">{</span>
	execute statement
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是一个死循环</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">for</span> <span class="token punctuation">{</span>
	execute statement
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p><strong>示例</strong></p><p>这是一段输出<code>[0,20]</code>区间数字的程序</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> main <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span> i <span class="token operator">&lt;=</span> <span class="token number">20</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以同时初始化多个变量，但是不能有多个<code>post statement</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">for</span> i<span class="token punctuation">,</span> j <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span> <span class="token operator">||</span> j <span class="token operator">&lt;</span> <span class="token number">1000</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当成<code>while</code>来使用</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	num <span class="token operator">:=</span> <span class="token number">1</span>
	<span class="token keyword">for</span> num <span class="token operator">&lt;</span> <span class="token number">100</span> <span class="token punctuation">{</span>
		num <span class="token operator">*=</span> <span class="token number">2</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>双循环循环打印九九乘法表</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">9</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> j <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> <span class="token number">9</span><span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> i <span class="token operator">&lt;=</span> j <span class="token punctuation">{</span>
				fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d*%d = %2d  &quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">,</span> i<span class="token operator">*</span>j<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token number">1</span><span class="token operator">*</span><span class="token number">1</span> <span class="token operator">=</span>  <span class="token number">1</span>  <span class="token number">1</span><span class="token operator">*</span><span class="token number">2</span> <span class="token operator">=</span>  <span class="token number">2</span>  <span class="token number">1</span><span class="token operator">*</span><span class="token number">3</span> <span class="token operator">=</span>  <span class="token number">3</span>  <span class="token number">1</span><span class="token operator">*</span><span class="token number">4</span> <span class="token operator">=</span>  <span class="token number">4</span>  <span class="token number">1</span><span class="token operator">*</span><span class="token number">5</span> <span class="token operator">=</span>  <span class="token number">5</span>  <span class="token number">1</span><span class="token operator">*</span><span class="token number">6</span> <span class="token operator">=</span>  <span class="token number">6</span>  <span class="token number">1</span><span class="token operator">*</span><span class="token number">7</span> <span class="token operator">=</span>  <span class="token number">7</span>  <span class="token number">1</span><span class="token operator">*</span><span class="token number">8</span> <span class="token operator">=</span>  <span class="token number">8</span>  <span class="token number">1</span><span class="token operator">*</span><span class="token number">9</span> <span class="token operator">=</span>  <span class="token number">9</span>  
<span class="token number">2</span><span class="token operator">*</span><span class="token number">2</span> <span class="token operator">=</span>  <span class="token number">4</span>  <span class="token number">2</span><span class="token operator">*</span><span class="token number">3</span> <span class="token operator">=</span>  <span class="token number">6</span>  <span class="token number">2</span><span class="token operator">*</span><span class="token number">4</span> <span class="token operator">=</span>  <span class="token number">8</span>  <span class="token number">2</span><span class="token operator">*</span><span class="token number">5</span> <span class="token operator">=</span> <span class="token number">10</span>  <span class="token number">2</span><span class="token operator">*</span><span class="token number">6</span> <span class="token operator">=</span> <span class="token number">12</span>  <span class="token number">2</span><span class="token operator">*</span><span class="token number">7</span> <span class="token operator">=</span> <span class="token number">14</span>  <span class="token number">2</span><span class="token operator">*</span><span class="token number">8</span> <span class="token operator">=</span> <span class="token number">16</span>  <span class="token number">2</span><span class="token operator">*</span><span class="token number">9</span> <span class="token operator">=</span> <span class="token number">18</span>
<span class="token number">3</span><span class="token operator">*</span><span class="token number">3</span> <span class="token operator">=</span>  <span class="token number">9</span>  <span class="token number">3</span><span class="token operator">*</span><span class="token number">4</span> <span class="token operator">=</span> <span class="token number">12</span>  <span class="token number">3</span><span class="token operator">*</span><span class="token number">5</span> <span class="token operator">=</span> <span class="token number">15</span>  <span class="token number">3</span><span class="token operator">*</span><span class="token number">6</span> <span class="token operator">=</span> <span class="token number">18</span>  <span class="token number">3</span><span class="token operator">*</span><span class="token number">7</span> <span class="token operator">=</span> <span class="token number">21</span>  <span class="token number">3</span><span class="token operator">*</span><span class="token number">8</span> <span class="token operator">=</span> <span class="token number">24</span>  <span class="token number">3</span><span class="token operator">*</span><span class="token number">9</span> <span class="token operator">=</span> <span class="token number">27</span>
<span class="token number">4</span><span class="token operator">*</span><span class="token number">4</span> <span class="token operator">=</span> <span class="token number">16</span>  <span class="token number">4</span><span class="token operator">*</span><span class="token number">5</span> <span class="token operator">=</span> <span class="token number">20</span>  <span class="token number">4</span><span class="token operator">*</span><span class="token number">6</span> <span class="token operator">=</span> <span class="token number">24</span>  <span class="token number">4</span><span class="token operator">*</span><span class="token number">7</span> <span class="token operator">=</span> <span class="token number">28</span>  <span class="token number">4</span><span class="token operator">*</span><span class="token number">8</span> <span class="token operator">=</span> <span class="token number">32</span>  <span class="token number">4</span><span class="token operator">*</span><span class="token number">9</span> <span class="token operator">=</span> <span class="token number">36</span>
<span class="token number">5</span><span class="token operator">*</span><span class="token number">5</span> <span class="token operator">=</span> <span class="token number">25</span>  <span class="token number">5</span><span class="token operator">*</span><span class="token number">6</span> <span class="token operator">=</span> <span class="token number">30</span>  <span class="token number">5</span><span class="token operator">*</span><span class="token number">7</span> <span class="token operator">=</span> <span class="token number">35</span>  <span class="token number">5</span><span class="token operator">*</span><span class="token number">8</span> <span class="token operator">=</span> <span class="token number">40</span>  <span class="token number">5</span><span class="token operator">*</span><span class="token number">9</span> <span class="token operator">=</span> <span class="token number">45</span>
<span class="token number">6</span><span class="token operator">*</span><span class="token number">6</span> <span class="token operator">=</span> <span class="token number">36</span>  <span class="token number">6</span><span class="token operator">*</span><span class="token number">7</span> <span class="token operator">=</span> <span class="token number">42</span>  <span class="token number">6</span><span class="token operator">*</span><span class="token number">8</span> <span class="token operator">=</span> <span class="token number">48</span>  <span class="token number">6</span><span class="token operator">*</span><span class="token number">9</span> <span class="token operator">=</span> <span class="token number">54</span>
<span class="token number">7</span><span class="token operator">*</span><span class="token number">7</span> <span class="token operator">=</span> <span class="token number">49</span>  <span class="token number">7</span><span class="token operator">*</span><span class="token number">8</span> <span class="token operator">=</span> <span class="token number">56</span>  <span class="token number">7</span><span class="token operator">*</span><span class="token number">9</span> <span class="token operator">=</span> <span class="token number">63</span>
<span class="token number">8</span><span class="token operator">*</span><span class="token number">8</span> <span class="token operator">=</span> <span class="token number">64</span>  <span class="token number">8</span><span class="token operator">*</span><span class="token number">9</span> <span class="token operator">=</span> <span class="token number">72</span>
<span class="token number">9</span><span class="token operator">*</span><span class="token number">9</span> <span class="token operator">=</span> <span class="token number">81</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="for-range" tabindex="-1"><a class="header-anchor" href="#for-range" aria-hidden="true">#</a> for range</h2><p><code>for range</code>可以更加方便的遍历一些可迭代的数据结构，例如：数组，切片，字符串，映射表，通道。语句格式如下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">for</span> index<span class="token punctuation">,</span> value <span class="token operator">:=</span> <span class="token keyword">range</span> iterable <span class="token punctuation">{</span>
	
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>index</code>为可迭代数据结构的索引，<code>value</code>则是对应索引下的值，例如使用<code>for range</code>遍历一个字符串。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   sequence <span class="token operator">:=</span> <span class="token string">&quot;hello world&quot;</span>
   <span class="token keyword">for</span> index<span class="token punctuation">,</span> value <span class="token operator">:=</span> <span class="token keyword">range</span> sequence <span class="token punctuation">{</span>
      fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29),u=s("code",null,"for range",-1),d={href:"https://go.dev/ref/spec#For_statements",target:"_blank",rel:"noopener noreferrer"},k=a(`<br><h2 id="break" tabindex="-1"><a class="header-anchor" href="#break" aria-hidden="true">#</a> break</h2><p><code>break</code>关键字会终止最内层的<code>for</code>循环，结合标签一起使用可以达到终止外层循环的效果，例子如下：这是一个双循环</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> j <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> i <span class="token operator">&gt;</span> j <span class="token punctuation">{</span>
				<span class="token keyword">break</span>
			<span class="token punctuation">}</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0 0
0 1
0 2
0 3
0 4
0 5
0 6
0 7
0 8
0 9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用标签</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
Out<span class="token punctuation">:</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> j <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> i <span class="token operator">&gt;</span> j <span class="token punctuation">{</span>
				<span class="token keyword">break</span> Out
			<span class="token punctuation">}</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0 0
0 1
0 2
0 3
0 4
0 5
0 6
0 7
0 8
0 9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="continue" tabindex="-1"><a class="header-anchor" href="#continue" aria-hidden="true">#</a> continue</h2><p><code>continue</code>关键字会跳过最内层循环的本次迭代，直接进入下一次迭代，结合标签使用可以达到跳过外层循环的效果，例子如下</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> j <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> i <span class="token operator">&gt;</span> j <span class="token punctuation">{</span>
				<span class="token keyword">continue</span>
			<span class="token punctuation">}</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0 0
0 1
0 2
0 3
0 4
0 5
0 6
0 7
0 8
0 9
...
7 7
7 8
7 9
8 8
8 9
9 9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用标签</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
Out<span class="token punctuation">:</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> j <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> i <span class="token operator">&gt;</span> j <span class="token punctuation">{</span>
				<span class="token keyword">continue</span> Out
			<span class="token punctuation">}</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0 0
0 1
0 2
0 3
0 4
0 5
0 6
0 7
0 8
0 9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function m(b,v){const e=l("ExternalLinkIcon");return t(),o("div",null,[i,s("p",null,[n("对于每一个种数据结构，"),u,n("的实现都可能不同，后续也会讲到，可以前往"),s("a",d,[n("Go - for statement"),c(e)]),n("以了解更多细节。")]),k])}const f=p(r,[["render",m],["__file","55.loop.html.vue"]]);export{f as default};
