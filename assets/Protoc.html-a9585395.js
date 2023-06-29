import{_ as o,V as p,W as l,X as n,Y as s,$ as e,Z as t,F as i}from"./framework-44a66fc7.js";const c={},r=n("h1",{id:"protocol-buffers",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#protocol-buffers","aria-hidden":"true"},"#"),s(" Protocol Buffers")],-1),d={href:"https://developers.google.com/protocol-buffers/",target:"_blank",rel:"noopener noreferrer"},u=t(`<p>Protoc大多数情况下，用于微服务和RPC之间的通信，如果只是单纯的一体Web开发和前后端交互，可能很少会用到Protoc，更多的还是json。</p><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p><code>Protocol Buffers</code>是谷歌2008开源的语言中立，协议中立，可扩展的结构化数据序列化机制。相比于以上三种更加的轻便，而且在解包封包的时候更加的快速，多用于RPC领域通信相关，可以定义数据的结构化方式，然后可以使用特殊生成的源代码轻松地将结构化数据写入各种数据流和从各种数据流中读取结构化数据，并使用于各种语言。</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>1.在开始之前你需要安装编译器，根据自己的系统选择用什么版本和什么类型的。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://github.com/protocolbuffers/protobuf/releases
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.随后将下载后的文件<code>/bin</code>目录配置到系统变量中</p><p>3.在命令行输入<code>protoc --version</code>查看是否安装成功。</p><p>4.安装插件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,10),k={href:"https://developers.google.com/protocol-buffers/docs/gotutorial",target:"_blank",rel:"noopener noreferrer"},m=t(`<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><p>首先，<code>Protocol Buffers</code>的文件是以<code>.proto</code>结尾，看一个例子</p><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token keyword">syntax</span> <span class="token operator">=</span> <span class="token string">&quot;proto3&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">message</span> <span class="token class-name">SearchRequest</span> <span class="token punctuation">{</span>
  <span class="token builtin">string</span> query <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> number <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>第一行<code>syntax = &quot;proto3&quot;;</code> 表示使用<code>proto3</code>的语法，默认使用<code>proto2</code>的语法</li><li><code>message</code>声明的方式类似于结构体，是<code>proto</code>中的基本结构</li><li><code>SearchRequest</code>中定义了三个字段，每个字段都会有名称和类型</li></ul><h2 id="字段类型" tabindex="-1"><a class="header-anchor" href="#字段类型" aria-hidden="true">#</a> 字段类型</h2><table><thead><tr><th style="text-align:left;">.proto Type</th><th style="text-align:left;">Go Type</th></tr></thead><tbody><tr><td style="text-align:left;">double</td><td style="text-align:left;">float64</td></tr><tr><td style="text-align:left;">float</td><td style="text-align:left;">float32</td></tr><tr><td style="text-align:left;">int32</td><td style="text-align:left;">int32</td></tr><tr><td style="text-align:left;">int64</td><td style="text-align:left;">int64</td></tr><tr><td style="text-align:left;">uint32</td><td style="text-align:left;">uint32</td></tr><tr><td style="text-align:left;">uint64</td><td style="text-align:left;">uint64</td></tr><tr><td style="text-align:left;">sint32</td><td style="text-align:left;">int32</td></tr><tr><td style="text-align:left;">sint64</td><td style="text-align:left;">int64</td></tr><tr><td style="text-align:left;">fixed32</td><td style="text-align:left;">uint32</td></tr><tr><td style="text-align:left;">fixed64</td><td style="text-align:left;">uint64</td></tr><tr><td style="text-align:left;">sfixed32</td><td style="text-align:left;">int32</td></tr><tr><td style="text-align:left;">sfixed64</td><td style="text-align:left;">int64</td></tr><tr><td style="text-align:left;">bool</td><td style="text-align:left;">bool</td></tr><tr><td style="text-align:left;">string</td><td style="text-align:left;">string</td></tr><tr><td style="text-align:left;">bytes</td><td style="text-align:left;">[]byte</td></tr></tbody></table><h2 id="字段编号" tabindex="-1"><a class="header-anchor" href="#字段编号" aria-hidden="true">#</a> 字段编号</h2><p>事实上，proto并不是传统的键值类型，在声明的<code>.protoc</code>中是不会出现具体的数据的，每一次字段的<code>=</code>后面跟的应该是当前<code>message</code>中的唯一编号，这些编号用于在二进制消息体中识别和定义这些字段。编号从1开始，1-15的编号会占用1个字节，16-2047会占用两个字节，因此尽可能的将频繁出现的字段赋予1-15的编号以节省空间，并且应该留出一些空间以留给后续可能会频繁出现的字段。</p><p>一个<code>message</code>中的字段应当遵循以下规则</p><ul><li><p><code>singular</code>: 默认是该种类型的字段，在一个结构良好的<code>message</code>中，有且只能由0个或者1个该字段，即不能重复存在同一个字段。如下声明便会报错。</p><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token keyword">syntax</span> <span class="token operator">=</span> <span class="token string">&quot;proto3&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">message</span> <span class="token class-name">SearchRequest</span> <span class="token punctuation">{</span>
  <span class="token builtin">string</span> query <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> number <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> number <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span><span class="token comment">//字段重复</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>optional</code>: 与<code>singular</code>类似，只是可以显示的检查字段值是否被设置，可能会有以下两种情况</p><ul><li><code>set</code>: 将会被序列化</li><li><code>unset</code>: 不会被序列化</li></ul></li><li><p><code>repeated</code>: 此种类型的字段可以出现0次或多次，将会按照顺序保留重复值（说白了其实就是数组，可以允许同一个类型的值多次重复出现，并且按照出现的顺序保留，就是索引）</p></li><li><p><code>map</code>: 键值对类型的字段，声明方式如下</p><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token map class-name">map<span class="token punctuation">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span><span class="token builtin">int32</span><span class="token punctuation">&gt;</span></span> config <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h2><p>注释风格类似于<code>c/c++</code></p><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token keyword">syntax</span> <span class="token operator">=</span> <span class="token string">&quot;proto3&quot;</span><span class="token punctuation">;</span>

<span class="token comment">/* 注释
 * 注释 */</span>
<span class="token keyword">message</span> <span class="token class-name">SearchRequest</span> <span class="token punctuation">{</span>
  <span class="token builtin">string</span> query <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">//注释</span>
  <span class="token builtin">string</span> number <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="保留字段" tabindex="-1"><a class="header-anchor" href="#保留字段" aria-hidden="true">#</a> 保留字段</h2><p><code>reserve</code>关键字可以声明保留字段，保留字段编号声明后，将无法再被用作其他字段的编号和名称，编译时也会发生错误。<strong>谷歌官方给出的回答是</strong>：，如果一个<code>.proto</code>文件在新版本中删除了一些编号，那么在未来其他用户可能会重用这些已被删除的编号，但是倘若换回旧版本的编号的话就会造成字段对应的编号不一致从而产生错误，保留字段就可以在编译期起到这么一个提醒作用，提醒你不能使用这个保留使用的字段，否则编译将会不通过。</p><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token keyword">syntax</span> <span class="token operator">=</span> <span class="token string">&quot;proto3&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">message</span> <span class="token class-name">SearchRequest</span> <span class="token punctuation">{</span>
  <span class="token builtin">string</span> query <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> number <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token map class-name">map<span class="token punctuation">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">int32</span><span class="token punctuation">&gt;</span></span> config <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  <span class="token keyword">repeated</span> <span class="token builtin">string</span> a <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
  <span class="token keyword">reserved</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">;</span> <span class="token comment">//声明具体名称的字段为保留字段</span>
  <span class="token keyword">reserved</span> <span class="token number">1</span> <span class="token keyword">to</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">//声明一个编号序列为保留字段</span>
  <span class="token keyword">reserved</span> <span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">;</span> <span class="token comment">//声明</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如此一来，此文件将不会通过编译。</p><h2 id="枚举" tabindex="-1"><a class="header-anchor" href="#枚举" aria-hidden="true">#</a> 枚举</h2><p>可以声明枚举常量并将其当作字段的类型来使用，需要注意的是，枚举项的第一个元素必须是零，因为枚举项的默认值就是第一个元素。</p><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token keyword">syntax</span> <span class="token operator">=</span> <span class="token string">&quot;proto3&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">enum</span> <span class="token class-name">Type</span> <span class="token punctuation">{</span>
  GET <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  POST <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  PUT <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  DELETE <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">SearchRequest</span> <span class="token punctuation">{</span>
  <span class="token builtin">string</span> query <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> number <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token map class-name">map<span class="token punctuation">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">int32</span><span class="token punctuation">&gt;</span></span> config <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  <span class="token keyword">repeated</span> <span class="token builtin">string</span> a <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
  <span class="token positional-class-name class-name">Type</span> type <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当枚举项内部存在相同值的枚举项时，可以使用枚举别名</p><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token keyword">syntax</span> <span class="token operator">=</span> <span class="token string">&quot;proto3&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">enum</span> <span class="token class-name">Type</span> <span class="token punctuation">{</span>
  <span class="token keyword">option</span> allow_alias <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">//需要开启允许使用别名的配置项</span>
  GET <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  GET_ALIAS <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">//GET枚举项的别名</span>
  POST <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  PUT <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  DELETE <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">SearchRequest</span> <span class="token punctuation">{</span>
  <span class="token builtin">string</span> query <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> number <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token map class-name">map<span class="token punctuation">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">int32</span><span class="token punctuation">&gt;</span></span> config <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  <span class="token keyword">repeated</span> <span class="token builtin">string</span> a <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
  <span class="token positional-class-name class-name">Type</span> type <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="导入" tabindex="-1"><a class="header-anchor" href="#导入" aria-hidden="true">#</a> 导入</h2><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code>imtport <span class="token string">&quot;project/request.proto&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过上述语句可以导入该文件中的所有声明的<code>message</code>和<code>enum</code>。</p><p>为了方便新旧版本兼容，可以使用<code>public</code>关键字来进行传递依赖。</p><p><code>new.proto</code>文件</p><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token keyword">syntax</span> <span class="token operator">=</span> <span class="token string">&quot;proto3&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">message</span> <span class="token class-name">newMessage</span><span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>old.proto</code>文件</p><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token keyword">syntax</span> <span class="token operator">=</span> <span class="token string">&quot;proto3&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token keyword">public</span> <span class="token string">&quot;new.proto&quot;</span><span class="token punctuation">;</span> <span class="token comment">//传递依赖</span>
<span class="token keyword">import</span> <span class="token string">&quot;other.proto&quot;</span> <span class="token comment">//非传递依赖</span>

<span class="token keyword">message</span> <span class="token class-name">oldMessage</span><span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>test.proto</code>文件</p><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token keyword">syntax</span> <span class="token operator">=</span> <span class="token string">&quot;proto3&quot;</span><span class="token punctuation">;</span>

<span class="token comment">//可以使用new.proto和old.proto的内容，但不能使用other.proto的内容</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="嵌套消息" tabindex="-1"><a class="header-anchor" href="#嵌套消息" aria-hidden="true">#</a> 嵌套消息</h2><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token keyword">message</span> <span class="token class-name">Outer</span> <span class="token punctuation">{</span>                  <span class="token comment">// Level 0</span>
  <span class="token keyword">message</span> <span class="token class-name">MiddleAA</span> <span class="token punctuation">{</span>  <span class="token comment">// Level 1</span>
    <span class="token keyword">message</span> <span class="token class-name">Inner</span> <span class="token punctuation">{</span>   <span class="token comment">// Level 2</span>
      <span class="token builtin">int64</span> ival <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token builtin">bool</span>  booly <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">message</span> <span class="token class-name">MiddleBB</span> <span class="token punctuation">{</span>  <span class="token comment">// Level 1</span>
    <span class="token keyword">message</span> <span class="token class-name">Inner</span> <span class="token punctuation">{</span>   <span class="token comment">// Level 2</span>
      <span class="token builtin">int32</span> ival <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token builtin">bool</span>  booly <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="package" tabindex="-1"><a class="header-anchor" href="#package" aria-hidden="true">#</a> Package</h2><p>您可以向<code>. proto</code>文件添加一个可选的包修饰符，以防止协议消息类型之间的名称冲突。</p><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token keyword">package</span> foo<span class="token punctuation">.</span>bar<span class="token punctuation">;</span>
<span class="token keyword">message</span> <span class="token class-name">Open</span> <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，您可以在定义消息类型的字段时使用包名:</p><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token keyword">message</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
  <span class="token positional-class-name class-name">foo<span class="token punctuation">.</span>bar<span class="token punctuation">.</span>Open</span> open <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="any" tabindex="-1"><a class="header-anchor" href="#any" aria-hidden="true">#</a> Any</h2><p>当新旧协议数据进行交换时，双方的字段版本不一致，一些新字段无法识别，即被称为未知字段。在<code>proto3</code>刚刚推出时，序列化输出时总是会抛弃未知字段，不过<code>3.5</code>以后又重新保留了未知字段，为了能够兼容低版本的<code>proto</code>文件。</p><p>Anymessage 类型允许您将消息作为嵌入类型使用，而不需要它们的<code>. proto</code> 定义。</p><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token keyword">import</span> <span class="token string">&quot;google/protobuf/any.proto&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">message</span> <span class="token class-name">ErrorStatus</span> <span class="token punctuation">{</span>
  <span class="token builtin">string</span> message <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">repeated</span> <span class="token positional-class-name class-name">google<span class="token punctuation">.</span>protobuf<span class="token punctuation">.</span>Any</span> details <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="oneof" tabindex="-1"><a class="header-anchor" href="#oneof" aria-hidden="true">#</a> OneOf</h2><p>这里的官方文档给出的解释实在是太繁琐了，其实就是表示一个字段在通信时可能会有多种不同的类型，但最终只可能会有一个类型被使用（联想<code>switch</code>），并且<code>oneof </code>内部不允许出现<code>repeated</code>修饰的字段。</p><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token keyword">message</span> <span class="token class-name">Stock</span> <span class="token punctuation">{</span>
    <span class="token comment">// Stock-specific data</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">Currency</span> <span class="token punctuation">{</span>
    <span class="token comment">// Currency-specific data</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">ChangeNotification</span> <span class="token punctuation">{</span>
  <span class="token builtin">int32</span> id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">oneof</span> instrument <span class="token punctuation">{</span>
    <span class="token positional-class-name class-name">Stock</span> stock <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token positional-class-name class-name">Currency</span> currency <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="service" tabindex="-1"><a class="header-anchor" href="#service" aria-hidden="true">#</a> Service</h2><p><code>service</code>关键字可以定义一个RPC服务，并且可以使用已定义的消息类型。</p><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token keyword">syntax</span> <span class="token operator">=</span> <span class="token string">&quot;proto3&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 声明了protobuf的版本</span>

<span class="token keyword">package</span> fixbug<span class="token punctuation">;</span> <span class="token comment">// 声明了代码所在的包（对于C++来说是namespace）</span>

<span class="token comment">//定义下面的选项，表示生成service服务类和rpc方法描述，默认不生成</span>
<span class="token keyword">option</span> cc_generic_services <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

<span class="token keyword">message</span> ResultCode<span class="token comment">//封装一下失败类</span>
<span class="token punctuation">{</span>
  <span class="token builtin">int32</span> errcode <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//表示第1字段</span>
  <span class="token builtin">bytes</span> errmsg <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span><span class="token comment">//表示第2字段</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义登录请求消息类型  name   pwd</span>
<span class="token keyword">message</span> <span class="token class-name">LoginRequest</span>
<span class="token punctuation">{</span>
  <span class="token builtin">bytes</span> name <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//表示第1字段</span>
  <span class="token builtin">bytes</span> pwd <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span><span class="token comment">//表示第2字段</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义登录响应消息类型</span>
<span class="token keyword">message</span> <span class="token class-name">LoginResponse</span>
<span class="token punctuation">{</span>
  <span class="token positional-class-name class-name">ResultCode</span> result <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//表示第1字段</span>
  <span class="token builtin">bool</span> success <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span><span class="token comment">//表示第2字段</span>
<span class="token punctuation">}</span>

<span class="token comment">//在protobuf里面怎么定义描述rpc方法的类型 - service</span>
<span class="token keyword">service</span> <span class="token class-name">UserServiceRpc</span>
<span class="token punctuation">{</span>
  <span class="token keyword">rpc</span> <span class="token function">Login</span><span class="token punctuation">(</span><span class="token class-name">LoginRequest</span><span class="token punctuation">)</span> <span class="token keyword">returns</span><span class="token punctuation">(</span><span class="token class-name">LoginResponse</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><p><code>option</code>就是修改当前文件一些处理的配置，前文中已经出现过了一次别名<code>option</code>，以下官网给出的常用配置项。</p><div class="language-proto line-numbers-mode" data-ext="proto"><pre class="language-proto"><code>option optimize_for = CODE_SIZE;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>代码生成配置，总共分为三种：</p><ul><li><p><code>SPEED</code>: 将生成用于序列化、解析和对消息类型执行其他常见操作的代码。这段代码经过了高度优化，这个阶段解析最快，但是空间占用最大。</p></li><li><p><code>CODE_SIZE</code>: 将生成最小的类，并依赖于共享的、基于反射的代码来实现序列化、解析和各种其他操作。因此，生成的代码将比使用 SPEED 时小得多，但是操作会更慢。</p></li><li><p><code>LITE_RUNTIME</code>: 将生成仅依赖于“ lite”运行时库的类(libProtobuf-lite 而不是 libProtobuf)。Lite 运行时比完整库小得多(数量级更小) ，但省略了某些特性，比如描述符和反射。</p></li></ul><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token keyword">option</span> go_package <span class="token operator">=</span> <span class="token string">&quot;dir;filename&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>代码生成时，指定的生成路径，以及文件名。</p><h2 id="生成代码" tabindex="-1"><a class="header-anchor" href="#生成代码" aria-hidden="true">#</a> 生成代码</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>protoc --proto_path=IMPORT_PATH --go_out=DST_DIR path/to/file.proto
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>IMPORT_PATH</code>：指定解析<code>import</code>指令时要去寻找依赖的目录。</li><li>如果<code>DST_DIR</code>以<code>zip</code>结尾的话，会自动将其打包为<code>.zip</code>的压缩文件。</li></ul>`,59);function v(b,g){const a=i("ExternalLinkIcon");return p(),l("div",null,[r,n("p",null,[s("官网："),n("a",d,[s("Protocol Buffers | Google Developers"),e(a)])]),u,n("p",null,[s("官方教程："),n("a",k,[s("Protocol Buffer Basics: Go | Protocol Buffers | Google Developers"),e(a)])]),m])}const h=o(c,[["render",v],["__file","Protoc.html.vue"]]);export{h as default};
