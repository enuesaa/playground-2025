<?php
declare(strict_types=1);

namespace App\Http\Controllers;

use App\Services\Nasa\NasaClient;
use App\UseCases\ListUseCase;

class ProtoController extends Controller
{
    public function __construct(
        protected NasaClient $nasa,
    ) {}

    public function index()
    {
        $usecase = new ListUseCase($this->nasa);
        var_dump($usecase->list());
        exit();
    }
}
