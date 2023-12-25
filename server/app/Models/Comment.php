<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    /**
     * table name
     * @var string
     */
    protected $table = 'comments';

    /**
    * primary key
    * @var string
    */
    protected $primaryKey = 'id';

    /**
     * @var bool
     */
    public $incrementing = true;

    /**
     * @var array
     */
    protected $fillable = [
        'username',
        'created_at',
        'text',
        'post_id'
    ];
}
