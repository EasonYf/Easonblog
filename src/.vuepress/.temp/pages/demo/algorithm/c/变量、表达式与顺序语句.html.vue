<template><div><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2>
<h3 id="理解-程序中存储信息的一个盒子-空间" tabindex="-1"><a class="header-anchor" href="#理解-程序中存储信息的一个盒子-空间" aria-hidden="true">#</a> 理解：程序中存储信息的一个盒子（空间）</h3>
<h3 id="类型" tabindex="-1"><a class="header-anchor" href="#类型" aria-hidden="true">#</a> 类型：</h3>
<ul>
<li><code v-pre>bool、char、int、float、double、long long、long double</code></li>
</ul>
<h2 id="输入与输出" tabindex="-1"><a class="header-anchor" href="#输入与输出" aria-hidden="true">#</a> 输入与输出</h2>
<ul>
<li>c++输入输出为：<code v-pre>cin与cout</code></li>
<li>c语言输入输出为：<code v-pre>scanf()与printf</code></li>
<li>输入大数据时，采用scanf、printf更加节省时间，但是也可以关闭<code v-pre>iostream</code>缓存流运用<code v-pre>cin cout</code>输入输出大数据（关闭后<code v-pre>cin cout</code>不可与<code v-pre>scanf printf</code>混用）</li>
</ul>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream></span></span>

<span class="token comment">/* run this program using the console pauser or add your own getch, system("pause") or input loop */</span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span><span class="token operator">*</span><span class="token operator">*</span> argv<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ios<span class="token double-colon punctuation">::</span><span class="token function">sync_with_stdio</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	cin<span class="token punctuation">.</span><span class="token function">tie</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输入输出：</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream></span></span>

<span class="token comment">/* run this program using the console pauser or add your own getch, system("pause") or input loop */</span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span><span class="token operator">*</span><span class="token operator">*</span> argv<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">int</span> a<span class="token punctuation">,</span>b<span class="token punctuation">;</span><span class="token comment">//定义变量</span>
	cin <span class="token operator">>></span> a <span class="token operator">>></span> b<span class="token punctuation">;</span><span class="token comment">//输入</span>
	cout <span class="token operator">&lt;&lt;</span> <span class="token string">"a:"</span><span class="token operator">&lt;&lt;</span> a <span class="token operator">&lt;&lt;</span> <span class="token string">"\nb:"</span> <span class="token operator">&lt;&lt;</span> b<span class="token punctuation">;</span><span class="token comment">//输出</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://cdn.nlark.com/yuque/0/2023/png/35273604/1697363837075-aeed4f2f-f982-4207-8de5-3d61c8901d4f.png#averageHue=%233c8543&amp;clientId=u736b24bc-a436-4&amp;from=paste&amp;height=302&amp;id=ub142547a&amp;originHeight=453&amp;originWidth=647&amp;originalType=binary&amp;ratio=1.5&amp;rotation=0&amp;showTitle=false&amp;size=33558&amp;status=done&amp;style=none&amp;taskId=u95f1a703-5d01-49e1-996a-fdf1679251e&amp;title=&amp;width=431.3333333333333" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream></span></span>

<span class="token comment">/* run this program using the console pauser or add your own getch, system("pause") or input loop */</span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span><span class="token operator">*</span><span class="token operator">*</span> argv<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">int</span> a<span class="token punctuation">,</span>b<span class="token punctuation">;</span><span class="token comment">//定义变量</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">"%d %d"</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>a<span class="token punctuation">,</span><span class="token operator">&amp;</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//输入</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"a:%d\nb:%d"</span><span class="token punctuation">,</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//输出</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="表达式" tabindex="-1"><a class="header-anchor" href="#表达式" aria-hidden="true">#</a> 表达式</h2>
<ul>
<li>基本算术运算规则与C 语言中一般无二。见C语言</li>
</ul>
</div></template>


